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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_createpattern.png";
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
