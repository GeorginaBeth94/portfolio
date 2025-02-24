const upbutton = document.getElementById("upbutton");

const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

window.onscroll = () => {scrollDisplay()}

function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upbutton.style.display = "block";
    } else {
        upbutton.style.display = "none";
    } 
}

async function getSong() {
    const url = "";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`error: ${response.status}`)
        }
        //Put successful function here//
    } catch (error) {
        console.error(error.message)
    }
}