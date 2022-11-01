let x = 50;
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
