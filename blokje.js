window.addEventListener("DOMContentLoaded", () => {
    const blokje = document.getElementById("blokje");
    const blokjeGeluid = document.getElementById("blokjeGeluid");

    blokje.addEventListener("click", () => {
        blokjeGeluid.currentTime = 0;
        blokjeGeluid.play();
    });
});