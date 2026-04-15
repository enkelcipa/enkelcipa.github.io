if (!window.__MENU_INITIALIZED__) {
  window.__MENU_INITIALIZED__ = true;

  fetch("menu.html")
    .then(res => res.text())
    .then(html => {
      // HARD GUARANTEE: only inject once
      if (!document.getElementById("DesktopMenu") &&
          !document.getElementById("MobileMenu")) {

        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        document.body.appendChild(wrapper);
      }
    });
}

// Safe toggles
function toggleDesktopMenu() {
  const menu = document.getElementById("DesktopMenu");
  if (menu) menu.classList.toggle("active");
}

function toggleMobileMenu() {
  const menu = document.getElementById("MobileMenu");
  if (menu) menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}