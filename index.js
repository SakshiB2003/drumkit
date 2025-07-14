var numberOfButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButton; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var makeButton = this.innerHTML;

    makeSound(makeButton);

    makeAnimation(makeButton);

  });
}

document.addEventListener("keypress", function (event) {

  makeSound(event.key);

  makeAnimation(event.key);
});


function makeSound(key) {

  switch (key) {

    case "w" :
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a" :
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    
    case "s" :
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    
    case "d" :
      var tom1 = new  Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j" :
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      
    case "k" :
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l" :
      var tom3 =  new Audio("sounds/tom-4");
        tom4.play();
        break;
      
    default:
      console.log("Hello");
    
  };
}

function makeAnimation(currentKey) {

  var CurrentButton = document.querySelector("." + currentKey);

  CurrentButton.classList.add("pressed");

  setTimeout(function () {

    CurrentButton.classList.remove("pressed");
  }, 100);


}