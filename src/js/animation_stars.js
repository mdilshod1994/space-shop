const canvas = document.createElement('canvas')
const c = canvas.getContext('2d')
const body = document.querySelector('body')

body.appendChild(canvas)
canvas.width = body.clientWidth
canvas.height = body.clientHeight

const colors = [
    '#4A4A51', '#36579A', '#314261', '#A5B7C2', '#2B296A', '#3E3D43', '#4F5D59', '#61595F', '#4936BF', '#7D7A66', '#F7F7A2', '#F7F7A2', '#801AB3', '#262829',
]

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random() * Math.PI * 2
    this.velocity = Math.random() * (0.003 - 0.001)
    this.distance = randomIntFromRange(70, canvas.width / 2)

    this.update = () => {
        this.radians += this.velocity
        this.x = x + Math.cos(this.radians) * this.distance
        this.y = y + Math.sin(this.radians) * this.distance

        this.draw()
    }

    this.draw = () => {

        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()

        c.closePath()
    }
}

let particles
function init() {
    particles = []
    for (let i = 0; i < 350; i++) {
        const radius = (Math.random() * 2) + 0.5
        particles.push(new Particle(750, 100, radius, randomColor(colors)))
    }
}


function animate() {
    requestAnimationFrame(animate)
    // c.fillStyle = `rgba(20, 20, 21, 0.02)`;
    // c.fillRect(0, 0, canvas.width, canvas.height)
    c.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(particle => {
        particle.update()
    });

}


init()
animate()

