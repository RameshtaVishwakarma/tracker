// Counter values object
const counters = {
  rc: getCounterValue('rc'),
  cr: getCounterValue('cr'),
  quants: getCounterValue('quants'),
  dilr: getCounterValue('dilr'),
  mocks: getCounterValue('mocks')
};

// Function to get counter value from localStorage
function getCounterValue(category) {
  return parseInt(localStorage.getItem(`${category}-counter`)) || 0;
}

// Function to update the counter value in localStorage
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
Object.keys(counters).forEach(category => {
  document.getElementById(`${category}-counter`).textContent = counters[category];
});
