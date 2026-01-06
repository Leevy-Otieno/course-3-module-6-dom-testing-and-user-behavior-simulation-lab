// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const el = document.createElement("div");
  el.textContent = content;
  container.appendChild(el);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) element.remove();
}

function simulateClick(containerId, content) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const button = document.createElement("button");
  button.textContent = "Click Me";
  button.addEventListener("click", () => {
    container.textContent = content;
  });
  container.appendChild(button);
  button.click(); // simulate click
}

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const target = document.getElementById(targetId);
  const errorMessage = document.getElementById("error-message");
  if (!form || !target || !errorMessage) return;

  const input = form.querySelector("input");
  if (!input.value.trim()) {
    errorMessage.textContent = "Input cannot be empty";
    errorMessage.classList.remove("hidden");
    return;
  }

  target.textContent = input.value;
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
