// Handle Footer Year -----------------------------
id.textContent = new Date().getFullYear()

// Mobile Menu Functionality ----------------------
const hamburgerBtn = document.getElementById('hamburger-button')
const mobileMenu = document.getElementById('mobile-menu')
const toogleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
}

hamburgerBtn.addEventListener("click", toogleMenu)
mobileMenu.addEventListener("click", toogleMenu)

// ----------------------------------------------