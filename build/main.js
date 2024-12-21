const initApp = () => {
    const hamburgerMenu = document.getElementById("mobile-open-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuButtons = mobileMenu.children;

    const projects = document.getElementsByClassName("project");
    const popup = document.getElementById("popup");
    const popText = document.getElementById("popText");
    const popTitle = document.getElementById("popTitle");
    const closePopup = document.getElementById("closePopup");


    const closePop = (e) => {
        if (popup) {
            popup.style.visibility = "hidden";
            document.body.style.pointerEvents = "all";
            for (let i = 0; i < projects.length; i++) {
                projects.item(i).style.pointerEvents = "all";
            }
            document.body.style.overflow = "visible";

        }
    }
    const openPop = (e) => {
        if (popup) {
            for (let i = 0; i < projects.length; i++) {
                projects.item(i).style.pointerEvents = "none";
            }

            popTitle.textContent = e.target.closest(".project").querySelector(".title").textContent;
            popText.textContent = e.target.closest(".project").querySelector(".description").textContent;
            popup.style.visibility = "visible";
            document.body.style.pointerEvents = "none";
            document.body.style.overflow = "hidden";
        }

    }

    closePopup.addEventListener('click', closePop);
    for (let i = 0; i < projects.length; i++) {
        projects.item(i).addEventListener('click', openPop);
    }


    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
        hamburgerMenu.classList.toggle("toggle-menu");
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
    for (let i = 0; i < mobileMenuButtons.length; i++) {
        mobileMenuButtons.item(i).addEventListener('click', toggleMenu);
    }



}

document.addEventListener('DOMContentLoaded', initApp);