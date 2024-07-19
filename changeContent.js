document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  const aboutMeContent = `
        <h2>About Me</h2>
        <p>Should have a gif of me, a bio and a timeline.</p>
    `;

  const cvContent = `
        <h2>CV</h2>
        <p>This should just redirect to the pdf file of my latest cv</p>
    `;

  const filesContent = `
        <h2>Files</h2>
        <p>This should have all of my certifications and like, the documents validating them.</p>
    `;

  const buttons = document.querySelectorAll("#navigation button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      switch (button.id) {
        case "about-me":
          contentDiv.innerHTML = aboutMeContent;
          break;
        case "CV":
          contentDiv.innerHTML = cvContent;
          break;
        case "Files":
          contentDiv.innerHTML = filesContent;
          break;
      }
    });
  });

  // Initialize with the About Me content
  contentDiv.innerHTML = aboutMeContent;
});
