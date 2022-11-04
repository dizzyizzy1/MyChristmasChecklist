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

const downloadChecklist = () => {
  let contentToPrint = document.querySelector("#checklist");
  
  html2canvas(contentToPrint, { }).then(
    (canvas) => {
      let a = document.createElement("a");
      a.download = "checklist.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    } 
  );
};

const toggleChecklist = () => {
  let myChecklist = document.querySelector("#checklist");
  myChecklist.classList.toggle("hidden");
  
  let
};