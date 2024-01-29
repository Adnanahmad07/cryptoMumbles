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






// function to automatic change background Imeges
var f = 0;
var slidImage = [];
var slidTime = 4000;


slidImage[0] = 'slid/1.jpg';
slidImage[1] = 'slid/2.jpg';
slidImage[2] = 'slid/3.jpg';
slidImage[3] = 'slid/4.png';





function Changebackground() {
    document.imgslide.src = slidImage[f];

    if (f < slidImage.length - 1) {
        f++;
    } else {
        f = 0;
    }

    setTimeout(Changebackground, slidTime);

}
window.onload = Changebackground;


















let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;

        if (top >= offset && top < offset + hight) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }

    })
}




setTimeout(() => {
    let mainhyd = document.querySelector('.main-hedding');
    mainhyd.style.top = '10rem';
}, 1400)


function automaticnavcome() {

}



setTimeout(() => {
    let nav = document.querySelector('nav');

    nav.style.left = '0';
}, 600);













function redirectToGoogleForm() {
    // Replace 'YOUR_GOOGLE_FORM_LINK' with the actual link to your Google Form
    var googleFormLink = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';
    window.location.href = googleFormLink;
}






















