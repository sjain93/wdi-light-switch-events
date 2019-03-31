document.addEventListener("DOMContentLoaded", function() {
  const buttonSwitch = document.getElementsByClassName('switch')[0];
  const body = document.getElementsByTagName('body')[0];
  const textBox = document.querySelector('.status');

  buttonSwitch.addEventListener('click', function(changeLight){
      buttonSwitch.classList.toggle('on');
      buttonSwitch.classList.toggle('off');
      body.classList.toggle("light");
      body.classList.toggle("dark");
      if (textBox.innerText == "It's so bright in here!") {
        textBox.innerText = "Hey, who turned off the lights?";
      }
      else {
        textBox.innerText = "It's so bright in here!";
      }});
});
