console.clear();
// Utils
const deg = a => Math.PI / 180 * a;
const randomness = () => Math.floor(40 + Math.random() * 1080) * Math.round(Math.random());

// Setup
const Points = [];
let rotation = 0;
let newRotation = Math.random() * 360;
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 180; i += 1) {
        Points.push({ ox: 0, oy: 0, x: 0,y: 0 });
    }
    createLines();
}

// Lines
function createLines() {
    // const radius = Math.min(240, window.innerWidth * 0.45);
    const radius = window.innerHeight / 3;
    const increment = 2;
    newRotation = rotation + 30;
    const r1 = randomness();
    const r2 = randomness();
    const r3 = randomness();
    const r4 = r1 !== 0 && r2 !== 0 && r3 !== 0 ? randomness() : Math.random() * 360;
    for (let i = 0; i < 180; i += increment) {
        const x1 = radius * sin(deg(i + r1));
        const y1 = radius * cos(deg(i + r2));
        Points[i].x = x1;
        Points[i].y = y1;
        const x2 = radius * sin(deg(i + r3));
        const y2 = radius * cos(deg(i + r4));
        Points[i + 1].x = x2;
        Points[i + 1].y = y2;
    }
}

let temp = 0;

// Redraw
function mousePressed() {
    createLines();
    temp += 1;
}
function touchStarted() {
    createLines();
    temp += 1;
}

// Draw Lines
function drawLines(clock) {
    const smooth = 0.000001;
    const stagger = 0.0003;
    for (let i = 0; i < Points.length; i += 2) {
        stroke(255, i * 0.4);
        Points[i].ox = lerp(Points[i].ox, Points[i].x, smooth + i * stagger);
        Points[i].oy = lerp(Points[i].oy, Points[i].y, smooth + i * stagger);
        Points[i + 1].ox = lerp(Points[i + 1].ox, Points[i + 1].x, smooth + i * stagger);
        Points[i + 1].oy = lerp(Points[i + 1].oy, Points[i + 1].y, smooth + i * stagger);
        
        // Special
        // line(Points[i].ox, Points[i].oy, Points[i + 1].ox, Points[i + 1].oy)
        
        const x = lerp(Points[i].ox, Points[i + 1].ox, .3);
        const y = lerp(Points[i].oy, Points[i + 1].oy, .7);
        bezier(Points[i].ox, Points[i].oy, y, x, x, y, Points[i + 1].ox, Points[i + 1].oy);
    }

    // == Just extra text ==
    // text(temp, 0, 0);
}

// Draw
let time;
function draw() {
    time += 0.2;
    background(22, 22, 22);
    // background(250, 0, 0);
    strokeWeight(1.2);
    noFill();
    translate(width / 2, height / 2);
    rotation = lerp(rotation, newRotation, smooth);
    rotate(deg(rotation));
    drawLines(time);
}



// Resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// setTimeout(createLines, 5000);