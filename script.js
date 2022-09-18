for (let i = 0; i < 16; i++) {
  let main = document.createElement("div");
  main.classList.add("main");
  for (let j = 0; j < 16; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", (e) => box.classList.add("colorBox"));
    main.append(box);
  }
  let square = document.querySelector(".square");
  square.append(main);
}
