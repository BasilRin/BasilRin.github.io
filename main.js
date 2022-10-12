// Get the elements with class="column"
let elements = document.getElementsByClassName("column");
const sizeArray = [
  "25%",
  "20%",
  "15%",
  "10%",
  "5%",
  "25%",
  "20%",
  "15%",
  "10%",
  "5%",
];

let fourImages = () => {
  for (let i = 0; i < elements.length; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    elements[i].style.msFlex = sizeArray[randomNumber];
    elements[i].style.flex = sizeArray[randomNumber];
    console.log(randomNumber);
  }
};

fourImages();
