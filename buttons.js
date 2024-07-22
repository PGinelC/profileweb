document.addEventListener("DOMContentLoaded", function () {
  // Function to get a random color
  function getRandomColor() {
    const colors = ["#00AF91", "#F58634", "#FFCC29"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // Function to handle button click
  function handleButtonClick(event) {
    // Get all buttons with the class 'btn'
    const buttons = document.querySelectorAll("#navigation button");

    // Reset all buttons to white
    buttons.forEach((button) => {
      button.style.backgroundColor = "white";
    });

    // Change the clicked button's color
    event.target.style.backgroundColor = getRandomColor();
  }

  // Get all buttons with the class 'btn'
  const buttons = document.querySelectorAll("#navigation button");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
});
