let slider = document.querySelector(".slider");
// console.log(slider);
let sliderValue = slider.value;
slider.oninput = function () {
  sliderValue = this.value;
  // setupGrid(sliderValue);
  console.log(sliderValue);
};

let mouseDown = false;
document.body.onmouseup = () => (mouseDown = false);
document.body.onmousedown = () => (mouseDown = true);

let eraser = document.querySelector(".eraser");
let pickColor = document.querySelector(".pickColor");
let bwMode = document.querySelector(".bwMode");
let rgbMode = document.querySelector(".rgbMode");
let clear = document.querySelector(".clear");

eraser.addEventListener("click", (e) => {
  updatePreviousButton();
  updateMode("eraser");
  eraser.classList.add("activeButton");
});

bwMode.addEventListener("click", (e) => {
  updatePreviousButton();
  updateMode("bwMode");
  bwMode.classList.add("activeButton");
});

pickColor.addEventListener("click", (e) => {
  updatePreviousButton();
  updateMode("pickColor");
  pickColor.classList.add("activeButton");
});

rgbMode.addEventListener("click", (e) => {
  updatePreviousButton();
  updateMode("rgbMode");
  rgbMode.classList.add("activeButton");
});

clear.addEventListener("click", (e) => {
  updatePreviousButton();
  updateMode("clear");
  clear.classList.add("activeButton");
});

let currentMode = "bwMode";
let previousMode = "bwMode";
bwMode.classList.add("activeButton");

function updateMode(newMode) {
  previousMode = currentMode;
  console.log(previousMode);
  currentMode = newMode;
  console.log(currentMode);
}

function updatePreviousButton() {
  if (currentMode == "rgbMode") {
    rgbMode.classList.remove("activeButton");
  } else if (currentMode == "bwMode") {
    bwMode.classList.remove("activeButton");
  } else if (currentMode == "pickColor") {
    pickColor.classList.remove("activeButton");
  } else if (currentMode == "eraser") {
    eraser.classList.remove("activeButton");
  } else if (currentMode == "clear") {
    clear.classList.remove("activeButton");
  }
}

function changeColor(e) {
  // console.log(e.type);
  // console.log(mouseDown);
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode == "eraser") {
    e.target.style.backgroundColor = "rgb(248, 247, 247)";
  } else if (currentMode == "bwMode") {
    e.target.style.backgroundColor = "#3c4048";
  } else if (currentMode == "rgbMode") {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  } else if (currentMode == "pickColor") {
    e.target.style.backgroundColor = pickColor.value;
  }
}

// Initial Grid Setup //

let x = 10;
setupGrid(x);

//Grid setup using the slider//

function setupGrid(x) {
  clearFunc(x);
  for (let i = 0; i < x; i++) {
    let main = document.createElement("div");
    main.classList.add("main");
    for (let j = 0; j < x; j++) {
      let box = document.createElement("div");
      box.classList.add("boxStyle");
      box.classList.add("box");
      box.style.width = `${540 / x}px`;
      box.style.height = `${540 / x}px`;
      box.addEventListener("mouseover", changeColor);
      box.addEventListener("mousedown", changeColor);
      main.append(box);
    }
    let square = document.querySelector(".square");
    square.append(main);
  }
}

//Clear grid//

function setupGridAfterClear(x) {
  for (let i = 0; i < x; i++) {
    let main = document.createElement("div");
    main.classList.add("main");
    for (let j = 0; j < x; j++) {
      let box = document.createElement("div");
      box.classList.add("boxStyle");
      box.classList.add("box");
      box.style.width = `${540 / x}px`;
      box.style.height = `${540 / x}px`;
      box.addEventListener("mouseover", changeColor);
      box.addEventListener("mousedown", changeColor);
      main.append(box);
    }
    let square = document.querySelector(".square");
    square.append(main);
  }
}

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearBtnFunc);

function clearFunc(x) {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.width = "0px";
    box.style.height = "0px";
  });
  // setupGridAfterClear(x);
}

function clearBtnFunc() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "rgb(248, 247, 247)";
  });
}
