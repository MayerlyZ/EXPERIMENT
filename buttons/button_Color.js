// Array of background colors
const colors = ["lightgreen", "lightcoral", "lightyellow", "lightblue"];
let colorIndex = 0;

// Get button and target element
const colorButton = document.getElementById("colorButton");
const element = document.getElementById("elemento");

// Change background color on button click
colorButton.addEventListener("click", function() {
  element.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
});



