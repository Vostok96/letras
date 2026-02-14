const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mensaje = document.getElementById("mensaje");

// BOTÓN SÍ
yesBtn.addEventListener("click", () => {
    mensaje.innerHTML = "TE AMO KATHERINE ♥";
});

// BOTÓN NO QUE HUYE
noBtn.addEventListener("mouseenter", () => {
    const container = document.querySelector(".buttons");

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
