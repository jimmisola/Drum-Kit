function buttonAnimation(currentKey) {
  var activeB = document.querySelector("." + currentKey);
  activeB.classList.add("pressed");
  
  setTimeout(function() {
    activeB.classList.remove("pressed");
  }, 100);

}

let buttonNum = document.querySelectorAll('.drum').length;
let buttonClick = document.querySelectorAll('.drum');

for (let i = 0; i<buttonNum; i++) {
  buttonClick[i].addEventListener('click', function () {

    let buttonPlay = this.innerHTML;
    makeSound(buttonPlay);
    buttonAnimation(buttonPlay);

  });
}

document.addEventListener('keydown', function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/crash.mp3').play();
      break;

      case 'a':
      new Audio('sounds/kick-bass.mp3').play();
      break;

      case 's':
      new Audio('sounds/snare.mp3').play();
      break;

      case 'd':
      new Audio('sounds/tom-1.mp3').play();
      break;

      case 'j':
      new Audio('sounds/tom-2.mp3').play();
      break;

      case 'k':
      new Audio('sounds/tom-3.mp3').play();
      break;

      case 'l':
      new Audio('sounds/tom-4.mp3').play();
      break;
  
    default: console.log(buttonPlay);
  }
}