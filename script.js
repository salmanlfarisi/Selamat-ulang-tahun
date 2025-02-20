function nextSlide(slide) {
    document.getElementById('slide' + slide).classList.remove('active');
    if (slide < 5) {
        document.getElementById('slide' + (slide + 1)).classList.add('active');
    }
}

function toggleMusic() {
    let audio = document.getElementById("background-music");

    // cek jika audio belum bisa diputar karena autoplay diblokir
    if (audio.muted) {
        audio.muted = false; // matikan mode mute agar suara keluar
    }

    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay diblokir, harap klik tombol musik.");
        });
    } else {
        audio.pause();
    }
}

// memastikan musik bisa diputar setelah interaksi pertama kali
document.addEventListener("click", () => {
    let audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    }
}, { once: true }); // hanya dijalankan sekali
