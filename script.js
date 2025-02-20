function nextSlide(slide) {
    document.getElementById('slide' + slide).classList.remove('active');
    if (slide < 5) {
        document.getElementById('slide' + (slide + 1)).classList.add('active');
    }

    // jika sudah di slide terakhir, mulai efek petasan
    if (slide === 4) {
        startFireworks();
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

// fungsi untuk efek petasan
function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    function createParticles(x, y, color) {
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: x,
                y: y,
                radius: Math.random() * 3 + 2,
                color: color,
                speedX: Math.random() * 5 - 2.5,
                speedY: Math.random() * 5 - 2.5,
                life: 100
            });
        }
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life--;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }
        requestAnimationFrame(animateFireworks);
    }

    // ledakan petasan di beberapa titik acak
    setInterval(() => {
        createParticles(
            Math.random() * canvas.width,
            Math.random() * canvas.height / 2,
            `hsl(${Math.random() * 360}, 100%, 60%)`
        );
    }, 500);

    animateFireworks();
}
