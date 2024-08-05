const numOfBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    btnAnimation(btnInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio('assets/sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio('assets/sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio('assets/sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio('assets/sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      const snare = new Audio('assets/sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      const crash = new Audio('assets/sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      const kick = new Audio('assets/sounds/kick-bass.mp3');
      kick.play();
      break;      
    default:
      console.log(key);
  }
}

function btnAnimation(currentKey) {
  const activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);
}