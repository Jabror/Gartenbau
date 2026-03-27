let Angebotfenster = document.getElementById("Angebotfenster");

function ObenWindow() {
    Angebotfenster.style.display = "block";
}
function CloseWindow() {
    Angebotfenster.style.display = "none";
}

// Scroll-Navigation: Buttons 1–12 → passende Small_Container
for (let i = 1; i <= 12; i++) {
    document.getElementById(String(i)).addEventListener("click", function () {
        const zielElement = document.getElementById("Small_Container" + i);
        zielElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
        CloseWindow();
    });
}

function Einkaufen(event) {
    let overlay  = document.getElementById("overlay");
    let overlay2 = document.getElementById("overlay2");
    overlay.style.display  = "block";
    overlay2.style.display = "block";

    let Eingabefenster = document.getElementById("Eingabefenster");
    let button    = event.target;
    let container = button.closest(".Small_Container");
    let title     = container.querySelector("h1").textContent;

    let Title3 = document.getElementById("Title3");
    Title3.textContent = title;
    localStorage.setItem("sharedValue", title);

    const rect = button.getBoundingClientRect();
    Eingabefenster.style.position = "fixed";
    Eingabefenster.style.top      = "50%";
    Eingabefenster.style.left     = "50%";
    Eingabefenster.style.transform = "translate(-50%, -50%)";
    Eingabefenster.style.right    = "auto";
    Eingabefenster.style.display  = "block";

    an_Telefon_anpassen();
}

function newTab() {
    window.open("Warenkorb.html", "_blank");
}

function an_Telefon_anpassen() {
    let Eingabefenster = document.getElementById("Eingabefenster");
    if (window.matchMedia("(max-width: 420px)").matches) {
        Eingabefenster.style.width = "94vw";
    }
}
