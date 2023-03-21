//////////////////////////////////////////////////////////////////////// gallery code /////////////////////////////////////////////////////////////////////////

/**

const sizeArray = ["25%", "20%"];

var elements = document.getElementsByClassName("column");

function four() {
  for (let i = 0; i < elements.length; i++) {
    let randomNumber = Math.floor(Math.random() * 2);
    console.log(randomNumber);
    elements[i].style.flex = sizeArray[randomNumber];
  }
}

four();



let picture1 = document.getElementById("pic1");
let picture2 = document.getElementById("pic2");

picture1.style.flex = "50%";

**/

//////////////////////////////////////////////////////////////////////// Pattern code /////////////////////////////////////////////////////////////////////////

function drawPattern(img, size) {
  var canvas = document.getElementById("canvas");

  canvas.height = 200;
  canvas.width = 1900;

  var tempCanvas = document.createElement("canvas"),
    tCtx = tempCanvas.getContext("2d");

  tempCanvas.width = size;
  tempCanvas.height = size;
  tCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, size, size);

  // use getContext to use the canvas for drawing
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = ctx.createPattern(tempCanvas, "repeat");

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
}

var img = new Image();
img.src = "/assets/PatternImage.png";
img.onload = function () {
  drawPattern(this, 50);
};
