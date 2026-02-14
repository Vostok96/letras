const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mensaje = document.getElementById("mensaje");

// BOTÓN SÍ
yesBtn.addEventListener("click", () => {
    mensaje.innerHTML = "TE AMO KATHERINE ♥";
});

// BOTÓN NO QUE HUYE
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
