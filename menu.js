// Inject menu.html into page
fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
  });

// Desktop toggle
function toggleDesktopMenu()
{
	const menu = document.getElementById("DesktopMenu");
	menu.classList.toggle("active");
}

// Mobile toggle
function toggleMobileMenu()
{
	const menu = document.getElementById("MobileMenu");
	menu.classList.toggle("active");
	document.body.classList.toggle("menu-open");
}