const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("open");
}

function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
}

burger.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

// ESC key closes it
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});