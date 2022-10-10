// Get the elements with class="column"
let elements = document.getElementsByClassName("column");

fourImages = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    console.log(i);
  }
};

fourImages(elements);
