let slider = document.querySelector(".slider");
// console.log(slider);
let sliderValue = slider.value;
slider.oninput = function () {
  sliderValue = this.value;
  setupGrid(sliderValue);
  console.log(sliderValue);
};

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
      box.addEventListener("mouseover", (e) => box.classList.add("colorBoxBW"));
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
      box.addEventListener("mouseover", (e) => box.classList.add("colorBox"));
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

// Eraser function //

let eraser = document.querySelector(".eraser");
eraser.addEventListener("click", (e) => {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener(
      "click",
      (e) => (box.style.backgroundColor = "rgb(248, 247, 247)")
    );
  });
});
