const initApp = () => {
    const hamburgerMenu = document.getElementById("mobile-open-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuButtons = mobileMenu.children;

    const toggleMenu = () =>{
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
        hamburgerMenu.classList.toggle("toggle-menu");
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
    for (let i = 0; i < mobileMenuButtons.length; i++){
        mobileMenuButtons.item(i).addEventListener('click', toggleMenu);
    }
    

    
}

document.addEventListener('DOMContentLoaded', initApp);