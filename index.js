// Detecting Button Press
// var numberOfDrumButtons = $(document)(".drum").length;

$(".drum").click(function() {
  var buttonInnerHTML = this.innerHTML;
  pickSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});


// Detecting Key Down
$(document).keydown(function(event) {
  pickSound(event.key);
  buttonAnimation(event.key);
});


// Play sound
function pickSound(option) {

  switch (option) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "x":
      var secret = new Audio("sounds/xaropinho-rapaz.mp3");
      secret.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }

}

// Button animation
function buttonAnimation (currentKey) {
  var activeButton = $(document)("." + currentKey);
  activeButton.addClass("pressed");
  setTimeout(function () {
    activeButton.removeClass("pressed");
  }, 100);
}
