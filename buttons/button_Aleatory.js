// Array of messages
const messages = [
    "Hello world!",
    "Have a great day!",
    "Keep learning.",
    "Practice makes perfect.",
    "Never give up!"
];

// Function to choose a random message
function getRandomMessage(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Function to display the message on the page
function showRandomMessage() {
    const message = getRandomMessage(messages);
    document.getElementById("randomMessage").textContent = message;
}