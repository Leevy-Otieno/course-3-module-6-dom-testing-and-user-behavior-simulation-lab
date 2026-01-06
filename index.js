
export function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const el = document.createElement("div");
  el.textContent = content;
  container.appendChild(el);
  return el;
}


export function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return false;
  element.remove();
  return true;
}


export function simulateClick(containerId, content) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const button = document.createElement("button");
  button.textContent = "Click Me";
  button.addEventListener("click", () => {
    container.textContent = content;
  });

  container.appendChild(button);

 
  button.click();

  return button;
}

/
export function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const target = document.getElementById(targetId);
  const errorMessage = document.getElementById("error-message");

  if (!form || !target) return false;
  
  if (!errorMessage) {
    
    const fallback = document.createElement("div");
    fallback.id = "error-message";
    fallback.style.color = "red";
    fallback.className = "hidden";
    form.parentElement.insertBefore(fallback, form);
  }

  const input = form.querySelector("input");
  if (!input || !input.value.trim()) {
    const em = document.getElementById("error-message");
    if (em) {
      em.textContent = "Input cannot be empty";
      em.classList.remove("hidden");
    }
    return false;
  }

  target.textContent = input.value;
  const em = document.getElementById("error-message");
  if (em) {
    em.textContent = "";
    em.classList.add("hidden");
  }
  return true;
}
