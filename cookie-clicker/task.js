const img = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

img.onclick = () => {
    if(Number(counter.textContent) % 2 === 1) {
    img.width += 20;
    img.height += 20;
} else {
    img.width -= 20;
    img.height -= 20;
}

counter.textContent = Number(counter.textContent) + 1;
}