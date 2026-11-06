(() => {
  "use strict";
  const search = document.querySelector("#search");
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".screen-card")];
  let active = "all";
  const frames = [...document.querySelectorAll(".device-stage iframe")];
  function scale(stage) {
    const frame = stage.querySelector("iframe");
    if (frame) frame.style.transform = `scale(${stage.clientWidth / 390})`;
  }
  const resize = new ResizeObserver((entries) => entries.forEach((entry) => scale(entry.target)));
  document.querySelectorAll(".device-stage").forEach((stage) => {
    resize.observe(stage);
    scale(stage);
  });
  function load(frame) {
    if (frame.dataset.src && !frame.getAttribute("src")) frame.src = frame.dataset.src;
  }
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          load(entry.target);
          observer.unobserve(entry.target);
        }
      }),
    { rootMargin: "300px 0px" }
  );
  frames.forEach((frame) => observer.observe(frame));
  function filter() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    cards.forEach((card) => {
      const match =
        (active === "all" || card.dataset.group === active) &&
        (!query || card.dataset.search.includes(query));
      card.hidden = !match;
      if (match) count++;
    });
    buttons.forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.filter === active))
    );
    document.querySelector("#count").textContent = `${count} of ${cards.length} screens`;
    document.querySelector("#empty").hidden = count !== 0;
  }
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      active = button.dataset.filter;
      filter();
    })
  );
  search.addEventListener("input", filter);
  filter();
})();
