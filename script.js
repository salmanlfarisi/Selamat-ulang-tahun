function nextSlide(slide) {
    document.getElementById('slide' + slide).classList.remove('active');
    if (slide < 5) {
        document.getElementById('slide' + (slide + 1)).classList.add('active');
    }
}

function toggleMusic() {
    let audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
