document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  async function loadContent(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content = await response.text();
      contentDiv.innerHTML = content;
    } catch (error) {
      console.error("Could not load the content:", error);
      contentDiv.innerHTML =
        "<p>Sorry, there was an error loading the content.</p>";
    }
  }

  const buttons = document.querySelectorAll("#navigation button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      switch (button.id) {
        case "about-me":
          loadContent("about-me.html");
          break;
        case "CV":
          loadContent("cv.html");
          break;
        case "Files":
          loadContent("files.html");
          break;
      }
    });
  });

  // Initialize with the About Me content
  loadContent("about-me.html");
});
