const p = document.getElementById('timer')


timer = () => {
    if (Number(p.textContent) !== 0) {
    p.textContent = Number(p.textContent) - 1;
    } else {
        return alert('Вы победили в конкурсе!');
}}

setInterval(timer, 100)






