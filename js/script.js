var mover = document.querySelector("#mover");
var tag = document.querySelectorAll("nav a");

function hover(e) {
    mover.style.left = e.offsetLeft + "px";
    mover.style.width = e.offsetWidth + "px";
}

tag.forEach(link => {
    link.addEventListener('mouseover', e => {
        hover(e.target);
    })
})

let t = 0;
const colors = ["#192065", "#f2ab41", "#2a338e"];
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const drawLine = (i, sz) => {
	const ym = (canvas.height - sz) / 2;
	const y0 = canvas.height / 2;
	const y = (t + i) % (sz / 2);
	const h = ((y / ym) * sz) / 40;
	ctx.beginPath();
	ctx.fillStyle = colors[0];
	ctx.fillRect(0, y + y0, canvas.width - 1, h);
};
const drawLines = (sz) => {
	const n = 9;
	for (let i = 0; i < n; ++i) drawLine((sz / 2 / n) * i, sz);
};
const drawGradient = (sz) => {
	const x0 = (canvas.width - sz) / 2;
	const y0 = (canvas.height - sz) / 2;
	const y1 = (canvas.height + sz) / 2;
	const gradient = ctx.createLinearGradient(x0, y0, x0, y1);
	gradient.addColorStop(0, colors[1]);
	gradient.addColorStop(0.5, colors[1]);
	gradient.addColorStop(1, colors[2]);
	ctx.beginPath();
	ctx.fillStyle = gradient;
	ctx.arc(canvas.width / 2, canvas.height / 2, sz / 2, 0, Math.PI * 2);
	ctx.fill();
};
const drawBackground = () => {
	ctx.beginPath();
	ctx.fillStyle = colors[0];
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};
const loop = () => {
	drawBackground();
	const sz = (Math.min(canvas.width, canvas.height) / 3) * 2;
	drawGradient(sz);
	drawLines(sz);
	t += 0.5;
	requestAnimationFrame(loop);
};
const handleResize = () => {
	canvas.width = window.innerWidth;
	canvas.height = canvas.parentElement.offsetHeight;
};
window.onresize = handleResize;
handleResize();
loop();















