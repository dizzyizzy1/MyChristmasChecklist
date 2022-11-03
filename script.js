/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

let counter = 1;

const goForward = () => {
  if (counter < 3) {
    counter++;
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.remove("hidden");
  }
};

const goBack = () => {
  if (counter > 1) {
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.add("hidden");
    counter--;
  }
};

