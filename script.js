const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

console.log(startBtn)
startBtn.addEventListener("click", ()=>{
    cactus.classList.add("cactusMov");
});
stopBtn.addEventListener("click", () => {
    cactus.classList.remove("cactusMov")
})
document.addEventListener("keydown", (e) => jump());

const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
};

const isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER");
  }
});

