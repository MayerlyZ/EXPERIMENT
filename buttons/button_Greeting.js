// Función mejorada para el saludo condicional
function mostrarSaludo() {
    const hora = new Date().getHours();
    let saludo;
    let emoji;
    let colorFondo;

    // Determinar el saludo, emoji y color según la hora
    if (hora >= 5 && hora < 12) {
        saludo = "¡Buenos días!";
        emoji = "☀️";
        colorFondo = "#FFF9C4"; // Amarillo claro
    } else if (hora >= 12 && hora < 19) {
        saludo = "¡Buenas tardes!";
        emoji = "🌤️";
        colorFondo = "#E3F2FD"; // Azul claro
    } else {
        saludo = "¡Buenas noches!";
        emoji = "🌙";
        colorFondo = "#E8EAF6"; // Morado claro
    }

    // Mostrar el saludo con emoji
    const outputElement = document.getElementById("greetingOutput");
    outputElement.textContent = `${saludo} ${emoji}`;
    
    // Cambiar el color de fondo
    outputElement.style.backgroundColor = colorFondo;
    
    // Animación
    outputElement.style.animation = "fadeIn 0.5s ease-in-out";
    setTimeout(() => {
        outputElement.style.animation = "";
    }, 500);
}

// Event listener mejorado
document.getElementById("greetingButton").addEventListener("click", mostrarSaludo);