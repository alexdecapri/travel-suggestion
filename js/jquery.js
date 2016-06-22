  var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

$(document).ready(function() {

  changeColor();
  $('button').on('click', changeColor);

  function changeColor() {
    $('body').animate({
        backgroundColor: randomColor,
        color: randomColor
    }, 800);
    $('button').animate({
        backgroundColor: randomColor,
    }, 800);
    console.log("test");
  }



});
