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