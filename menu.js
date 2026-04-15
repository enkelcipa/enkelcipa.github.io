if (!window.__menuLoaded) {
  window.__menuLoaded = true;

  fetch("menu.html")
    .then(res => res.text())
    .then(html => {
      // Prevent duplicate injection
      if (!document.getElementById("DesktopMenu") &&
          !document.getElementById("MobileMenu")) {
        document.body.insertAdjacentHTML("beforeend", html);
      }
    });
}

// Desktop toggle
function toggleDesktopMenu() {
  const menu = document.getElementById("DesktopMenu");
  if (menu) menu.classList.toggle("active");
}

// Mobile toggle
function toggleMobileMenu() {
  const menu = document.getElementById("MobileMenu");
  if (menu) menu.classList.toggle("active");

  document.body.classList.toggle("menu-open");
}