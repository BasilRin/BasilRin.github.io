
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

function drawPattern(img, size) {
  var canvas = document.getElementById('canvas');
  
  canvas.height = 200;
  canvas.width =  1900;
  
  var tempCanvas = document.createElement("canvas"),
      tCtx = tempCanvas.getContext("2d");

  tempCanvas.width = size;
  tempCanvas.height = size;
  tCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, size, size);

  // use getContext to use the canvas for drawing
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = ctx.createPattern(tempCanvas, 'repeat');
  
  ctx.beginPath();
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fill();

}

var img = new Image();
img.src = "/assets/PatternImage.png";
img.onload = function(){
 drawPattern(this, 50);
}