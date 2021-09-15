for (
  let index = 0;
  index < document.querySelectorAll(".drum").length;
  index++
) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      var swar = this.innerHTML;
      keyboard(swar);
    });
  document.addEventListener("keypress", function (event) {
    keyboard(event.key);
  });

  function keyboard(key) {
    switch (key) {
      case "Sa":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

        break;
      case "Re":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();

        break;
      case "Ga":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();

        break;
      case "Ma":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();

        break;
      case "Pa":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();

        break;

      case "Dh":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

        break;
      case "Ni":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();

        break;
      default:
        console.log("swar");
        break;
    }
  }
}
