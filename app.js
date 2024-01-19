$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");

        } else {
            $('nav').removeClass("sticky");
        }

    });
});



const menuBtn = document.getElementById("menu-btn");
const menuCard = document.getElementById("menu-card");
menuBtn.onclick = () => {
    menuCard.style.right = "0px";
}

function closebtn() {
    menuCard.style.right = "-400px";
}

const date = new Date()
const year = date.getFullYear();

document.getElementById("year").textContent = " " + year;