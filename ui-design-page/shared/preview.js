(() => {
  "use strict";
  const embedded = new URLSearchParams(location.search).get("embed") === "1";
  document.body.classList.toggle("embedded", embedded);
  if (embedded) {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === "../index.html") link.target = "_top";
      else if (/^[0-9]{2}-[a-z0-9-]+\.html$/.test(href)) {
        link.setAttribute("href", `${href}?embed=1`);
      }
    });
  }
  const toast = document.querySelector("#toast");
  let toastTimer;
  function notify(message) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 5000);
  }
  document.querySelectorAll("form").forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      notify("Design preview only. No account action or data save has occurred.");
    })
  );
  document.querySelectorAll("[data-demo]").forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();
      notify(button.dataset.demo || "Design preview only. Nothing is sent or saved.");
    })
  );
  document.querySelectorAll("[data-step]").forEach((button) => {
    const input = button.closest(".stepper")?.querySelector('input[type="number"]');
    if (!input) return;
    const sync = () => {
      const value = Number(input.value) || 0;
      const min = input.min === "" ? 0 : Number(input.min);
      const max = input.max === "" ? Infinity : Number(input.max);
      button.disabled = Number(button.dataset.step) < 0 ? value <= min : value >= max;
    };
    button.addEventListener("click", () => {
      const min = input.min === "" ? 0 : Number(input.min);
      const max = input.max === "" ? Infinity : Number(input.max);
      input.value = String(
        Math.min(max, Math.max(min, (Number(input.value) || 0) + Number(button.dataset.step)))
      );
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
    input.addEventListener("input", sync);
    sync();
  });
  document.querySelectorAll("[data-max-select]").forEach((group) => {
    const boxes = [...group.querySelectorAll('input[type="checkbox"]')];
    const max = Number(group.dataset.maxSelect) || Infinity;
    const count = group.querySelector("[data-selection-count]");
    const update = () => {
      if (count)
        count.textContent = `${boxes.filter((box) => box.checked).length} of ${max} selected`;
    };
    boxes.forEach((box) =>
      box.addEventListener("change", () => {
        if (boxes.filter((candidate) => candidate.checked).length > max) {
          box.checked = false;
          notify(`Choose up to ${max} options for this preview.`);
        }
        update();
      })
    );
    update();
  });
  document.querySelectorAll("[data-reorder]").forEach((list) => {
    list.addEventListener("click", (event) => {
      const button = event.target.closest("[data-move]");
      if (!button) return;
      const row = button.closest(".rule-row");
      if (!row) return;
      if (button.dataset.move === "up" && row.previousElementSibling)
        list.insertBefore(row, row.previousElementSibling);
      if (button.dataset.move === "down" && row.nextElementSibling)
        list.insertBefore(row.nextElementSibling, row);
      button.focus();
    });
  });
  document.querySelectorAll("[data-show-password]").forEach((button) =>
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.showPassword);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      button.textContent = input.type === "password" ? "Show" : "Hide";
    })
  );
  document.querySelectorAll("[data-calendar-select]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-calendar-select]")
        .forEach((day) => day.classList.remove("selected"));
      button.classList.add("selected");
      notify("Illustrative date selection. No historical account data is loaded.");
    })
  );
})();
