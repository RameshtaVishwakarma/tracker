// Retrieve the current counter values from localStorage (if available)
const counters = {
  rc: localStorage.getItem("rc-counter") || "0",
  cr: localStorage.getItem("cr-counter") || "0",
  quants: localStorage.getItem("quants-counter") || "0",
  dilr: localStorage.getItem("dilr-counter") || "0",
};

// Function to update the counter value and store it in localStorage
function updateCounter(category, value) {
  counters[category] = value;
  localStorage.setItem(`${category}-counter`, value);
}

// Function to increment the counter
function incrementCounter(category) {
  const currentValue = parseInt(counters[category]);
  const updatedValue = currentValue + 1;
  document.getElementById(`${category}-counter`).textContent = updatedValue;
  updateCounter(category, updatedValue);
}

// Function to decrement the counter
function decrementCounter(category) {
  const currentValue = parseInt(counters[category]);
  const updatedValue = currentValue - 1;
  if (updatedValue >= 0) {
    document.getElementById(`${category}-counter`).textContent = updatedValue;
    updateCounter(category, updatedValue);
  }
}

// Initialize the counters with their initial values
Object.keys(counters).forEach((category) => {
  document.getElementById(`${category}-counter`).textContent =
    counters[category];
});
