async function changeContent(button) {
  const contentDiv = document.getElementById("content");

  async function loadContent(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content = await response.text();
      contentDiv.innerHTML = content;
      // Dispatch a custom event after content is loaded
      document.dispatchEvent(new CustomEvent("contentUpdated"));
    } catch (error) {
      console.error("Could not load the content:", error);
      contentDiv.innerHTML =
        "<p>Sorry, there was an error loading the content.</p>";
    }
  }

  async function changeToViewFile(filename) {
    try {
      const response = await fetch("file-show.html");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let content = await response.text();
      content = content.replace("${filename}", filename);
      contentDiv.innerHTML = content;
      // Dispatch a custom event after content is loaded
      document.dispatchEvent(new CustomEvent("contentUpdated"));
    } catch (error) {
      console.error("Could not load the content:", error);
      contentDiv.innerHTML =
        "<p>Sorry, there was an error loading the content.</p>";
    }
  }

  switch (button.id) {
    case "about-me":
      await loadContent("about-me.html");
      break;
    case "CV":
      await loadContent("cv.html");
      break;
    case "Files":
      await loadContent("files.html");
      break;
    case "view-file":
      await changeToViewFile(button.name);
      break;
    default:
      console.error("Unknown button ID:", button.id);
  }
}

function refreshEventListeners() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    // Remove existing event listeners
    button.removeEventListener("click", handleButtonClick);
    // Add new event listener
    button.addEventListener("click", handleButtonClick);
  });
}

function handleButtonClick(event) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  changeContent(event.target);
}

// Main event listener
document.addEventListener("DOMContentLoaded", () => {
  refreshEventListeners();
  // Load the initial content here, I am leaving it empty for some dramatic effect right now
});

// Listen for the custom contentUpdated event
document.addEventListener("contentUpdated", () => {
  console.log("Content updated, refreshing event listeners...");
  refreshEventListeners();
});
