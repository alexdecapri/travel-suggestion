var app = angular.module('travelApp');

app.controller('homeCtrl', function($scope, $rootScope) {

  var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var pageColor = document.body;
  console.log(pageColor);

  var changeColor = function() {
    console.log(randomColor);
    pageColor.style.backgroundColor = randomColor;
    pageColor.style.color = randomColor;
    console.log("got here");
  };

  changeColor();




  // $(document).ready(function() {
  //   // console.log("working?");
  //
  //   getRandomColor();
  //   // $('button').on('click', getRandomColor());
  //
  //   function getRandomColor() {
  //
  //     var color = Math.floor(Math.random() * colors.length);
  //
  //     $('body').animate({
  //         backgroundColor: colors[color],
  //         color: colors[color]
  //     }, 800);
  //     $('#main-box').animate({
  //         color: colors[color]
  //     }, 800);
  //
  //
  //   }
  //
  // });

});
