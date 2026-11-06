"use client";

import { useEffect, useRef } from "react";
import {
  Box3,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
  type BufferGeometry,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

/** On-screen height of the bust in scene units. */
const HEIGHT = 2.6;
/** Resting yaw: a three-quarter view, the face turned toward the headline. */
const YAW = Math.PI * 0.8;

/**
 * Real-time marble head of Athena (SMK KAS275 plaster cast scan, public domain),
 * lit like a museum. It leans toward the pointer, drifts slowly while idle and
 * turns away as the hero scrolls out. Rendering stops while it is off screen,
 * and "reduce motion" gets a single still frame.
 */
export default function AthenaBust({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // No WebGL: the fresco and phone still carry the hero.
    }
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.domElement.style.cssText =
      "width:100%;height:100%;display:block;opacity:0;transition:opacity 1.6s ease";
    el.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    // Warm key light from the upper left, cool sky rim from behind, gold bounce from below.
    scene.add(new HemisphereLight(new Color("#eef1f3"), new Color("#b69a64"), 1.1));
    const key = new DirectionalLight(new Color("#fff4e2"), 2.6);
    key.position.set(-3, 4, 5);
    scene.add(key);
    const rim = new DirectionalLight(new Color("#aabac4"), 2.2);
    rim.position.set(4, 2, -4);
    scene.add(rim);

    const pivot = new Group();
    scene.add(pivot);

    const material = new MeshPhysicalMaterial({
      color: new Color("#ece6da"),
      roughness: 0.62,
      metalness: 0,
      sheen: 0.35,
      sheenColor: new Color("#f5f2eb"),
      sheenRoughness: 0.8,
    });

    let disposed = false;
    let loaded = false;
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    loader.load("/models/athena.glb", (gltf) => {
      if (disposed) return;
      gltf.scene.traverse((o) => {
        if ((o as Mesh).isMesh) {
          const mesh = o as Mesh;
          (mesh.geometry as BufferGeometry).computeVertexNormals();
          mesh.material = material;
        }
      });
      const bust = gltf.scene;
      bust.rotation.x = -Math.PI / 2; // The scan is Z-up.
      bust.rotation.z = Math.PI; // Face the viewer.
      // The scan is in millimetres: fit it to a fixed height and centre it on the pivot.
      bust.updateMatrixWorld(true);
      const box = new Box3().setFromObject(bust);
      const size = box.getSize(new Vector3());
      bust.scale.multiplyScalar(HEIGHT / size.y);
      bust.updateMatrixWorld(true);
      const centre = new Box3().setFromObject(bust).getCenter(new Vector3());
      bust.position.sub(centre);
      pivot.add(bust);
      loaded = true;
      pivot.rotation.y = YAW;
      resize();
      renderer.render(scene, camera);
      renderer.domElement.style.opacity = "1";
    });

    function resize() {
      const { width, height } = el!.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(() => {
      resize();
      if (loaded) renderer.render(scene, camera);
    });
    ro.observe(el);

    // Pointer target, eased every frame.
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    function onPointer(e: PointerEvent) {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    }

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduce) start();
    });
    io.observe(el);

    let raf = 0;
    let running = false;
    const t0 = performance.now();
    function frame(now: number) {
      if (!visible || disposed) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
      if (!loaded) return;
      const t = (now - t0) / 1000;
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;

      // 0 while the hero fills the screen, 1 once it has scrolled away.
      const rect = el!.getBoundingClientRect();
      const out = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);

      pivot.rotation.y = YAW + Math.sin(t * 0.25) * 0.12 + current.x * 0.38 + out * 0.9;
      pivot.rotation.x = current.y * 0.12 + out * 0.15;
      pivot.position.y = Math.sin(t * 0.6) * 0.04 + out * 0.4;
      camera.position.z = 6.2 + out * 1.6;
      renderer.render(scene, camera);
    }
    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }

    if (!reduce) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      start();
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      io.disconnect();
      pivot.traverse((o) => {
        if ((o as Mesh).isMesh) (o as Mesh).geometry.dispose();
      });
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={host} aria-hidden className={className} />;
}
