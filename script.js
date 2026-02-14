const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mensaje = document.getElementById("mensaje");
const container = document.querySelector(".buttons");

// BOTÓN SÍ
yesBtn.addEventListener("click", () => {
    mensaje.innerHTML = "TE AMO KATHERINE ♥";
});

// BOTÓN NO que huye pero dentro del área
noBtn.addEventListener("mouseenter", () => {

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
