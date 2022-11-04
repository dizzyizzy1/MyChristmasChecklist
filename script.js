/* Here are some functions to move the content forward and back */

let counter = 1;

const goForward = () => {
  if (counter < 3) {
    counter++;
    let idToMatch = "#slide-" + counter;
    document.querySelector(idToMatch).classList.remove("hidden");
  }
};

const goBack = () => {
  if (counter > 1) {
    let idToMatch = "#slide-" + counter;
    document.querySelector(idToMatch).classList.add("hidden");
    counter--;
  }
};