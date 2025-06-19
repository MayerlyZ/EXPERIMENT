// Function that executes when the button is clicked
function validateInput() {
  // Get the input value
  let inputValue = document.getElementById("inputField").value;

  // Check if the value is empty (falsy) or has content (truthy)
  if (inputValue) {
    // If there is text, show a positive message
    document.getElementById("validationMessage").textContent =
      "Thank you for writing something!";
    document.getElementById("validationMessage").style.color = "green";
  } else {
    // If empty, show a warning message
    document.getElementById("validationMessage").textContent =
      "The field is empty, please write something";
    document.getElementById("validationMessage").style.color = "red";
  }
}