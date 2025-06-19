// Improved function for conditional greeting
function showGreeting() {
    const hour = new Date().getHours();
    let greeting;
    let emoji;
    let bgColor;

    // Determine greeting, emoji and color based on time
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning!";
        emoji = "☀️";
        bgColor = "#FFF9C4"; // Light yellow
    } else if (hour >= 12 && hour < 19) {
        greeting = "Good afternoon!";
        emoji = "🌤️";
        bgColor = "#E3F2FD"; // Light blue
    } else {
        greeting = "Good night!";
        emoji = "🌙";
        bgColor = "#E8EAF6"; // Light purple
    }

    // Display greeting with emoji
    const outputElement = document.getElementById("greetingOutput");
    outputElement.textContent = `${greeting} ${emoji}`;
    
    // Change background color
    outputElement.style.backgroundColor = bgColor;
    
    // Animation
    outputElement.style.animation = "fadeIn 0.5s ease-in-out";
    setTimeout(() => {
        outputElement.style.animation = "";
    }, 500);
}

// Improved event listener
document.getElementById("greetingButton").addEventListener("click", showGreeting);