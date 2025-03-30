function playTakbir() {
    document.getElementById('takbir').play();
    startConfetti();
}

// Efek Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle(x, y) {
    return {
        x: x,
        y: y,
        size: Math.random() * 5 + 2,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * -3 - 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    };
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        particles.push(createParticle(window.innerWidth / 2, window.innerHeight / 2));
    }
}

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.05;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        if (p.y > canvas.height) {
            particles.splice(i, 1);
        }
    });
    requestAnimationFrame(updateParticles);
}

updateParticles();