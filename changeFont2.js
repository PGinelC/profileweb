document.addEventListener("DOMContentLoaded", () => {
  console.log("startAnimation");
  const titleText = document.getElementById("title-text");
  const fonts = [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "Courier New, monospace",
    "Georgia, serif",
    "Times New Roman, serif",
    "Comic Sans MS, cursive",
    "Trebuchet MS, sans-serif",
    "Lucida Console, monospace",
    "Roboto, sans-serif",
    "Open Sans, sans-serif",
    "Lato, sans-serif",
    "Montserrat, sans-serif",
    "Raleway, sans-serif",
    "Poppins, sans-serif",
    "Oswald, sans-serif",
    "Source Sans Pro, sans-serif",
    "Slabo 27px, serif",
    "Merriweather, serif",
    "PT Sans, sans-serif",
    "Ubuntu, sans-serif",
    "Nunito, sans-serif",
    "Cabin, sans-serif",
  ];
  const messages = [
    "Hello there",
    "Welcome to my website",
    "My name is",
    "Pedro Ginel Camacho",
  ];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function typeEffect(text, fontClass) {
    return new Promise((resolve) => {
      titleText.style.fontFamily = fontClass;
      let index = 0;
      titleText.innerHTML = "";
      const interval = setInterval(() => {
        if (index < text.length) {
          titleText.innerHTML += text[index];
          index++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  function deleteEffect() {
    return new Promise((resolve) => {
      const text = titleText.innerHTML;
      let index = text.length;
      const interval = setInterval(() => {
        if (index > 0) {
          titleText.innerHTML = text.substring(0, index - 1);
          index--;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });
  }

  async function startAnimation() {
    for (const message of messages) {
      const font = getRandomElement(fonts);

      await deleteEffect();
      await typeEffect(message, font);

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  startAnimation();
});
