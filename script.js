const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
const numParticles = 100;

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.color = 'rgba(255, 255, 255, 0.8)';
        this.life = Math.random() * 30 + 30; // lifespan of the particle
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.96; // gradually reduce size
        this.life -= 1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

// Function to create particles on mouse or touch move
function createParticles(e) {
    const xPos = e.clientX || e.touches[0].clientX;
    const yPos = e.clientY || e.touches[0].clientY;
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}

// Animation loop
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animateParticles);
}

// Event listeners
canvas.addEventListener('mousemove', createParticles);
canvas.addEventListener('touchmove', createParticles);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start animation
animateParticles();
