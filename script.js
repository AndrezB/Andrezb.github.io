// Función para validar el código de acceso en la primera página
function validateCode() {
    const code = document.getElementById("accessCode").value;
    const correctCode = "0607" "2112";// Cambia este código por el que desees

    if (code === correctCode) {
        window.location.href = "segunda.html"; // Redirige a la segunda página si el código es correcto
    } else {
        alert("Código incorrecto. No te acuerdas 😥.");
    }
}

// Función opcional para un efecto al cargar las páginas (mejor presentación)
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container, .adorned-page, .large-container");
    if (container) {
        container.style.opacity = "0";
        setTimeout(() => {
            container.style.transition = "opacity 1s ease-in-out";
            container.style.opacity = "1";
        }, 100);
    }
});

// Botón "Volver al inicio" en la tercera página
function goToStart() {
    window.location.href = "primera.html"; // Cambia a la página inicial
}

// Navegación directa a la sorpresa desde la segunda página
function goToSurprise() {
    window.location.href = "sorpresa.html"; // Redirige a la página de la sorpresa
}
