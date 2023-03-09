let offset = 0; //смещение от левого края

const sliderLine = document.querySelector('.advantages-screen__list');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 167;
    if (offset > 501) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 167;
    if (offset < 0) {
        offset = 501;
    }
    sliderLine.style.left = -offset + "px";
});