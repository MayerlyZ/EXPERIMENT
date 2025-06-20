// Initialize counter variable starting at 0
let counter = 0;

// Get DOM elements for buttons and counter display
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const counterValue = document.getElementById('counter-value');
const resetButton = document.getElementById('reset');

// Decrement button event listener
decrementButton.addEventListener('click', () => {
    // Only decrement if counter is greater than 0 (prevent negative numbers)
    if (counter > 0) {
        counter--;
        counterValue.textContent = counter;
    }
});

// Increment button event listener
incrementButton.addEventListener('click', () => {
    // Always increment the counter
    counter++;
    counterValue.textContent = counter;
});

// Reset button event listener
resetButton.addEventListener('click', () => {
    // Set counter back to 0
    counter = 0;
    counterValue.textContent = counter;
});