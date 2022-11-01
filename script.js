let slider = document.querySelector(".slider");
// console.log(slider);
let sliderValue = slider.value;
slider.oninput = function () {
  sliderValue = this.value;
  setupGrid(sliderValue);
  console.log(sliderValue);
};
// console.log(sliderValue);

function setupGrid(x) {
  for (let i = 0; i < x; i++) {
    let main = document.createElement("div");
    main.classList.add("main");
    for (let j = 0; j < x; j++) {
      let box = document.createElement("div");
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

// Initial Grid Setup //

let x = 20;
for (let i = 0; i < x; i++) {
  let main = document.createElement("div");
  main.classList.add("main");
  for (let j = 0; j < x; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${540 / x}px`;
    box.style.height = `${540 / x}px`;
    box.addEventListener("mouseover", (e) => box.classList.add("colorBox"));
    main.append(box);
  }
  let square = document.querySelector(".square");
  square.append(main);
}
