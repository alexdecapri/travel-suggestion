var app = angular.module('travelApp');

app.controller('homeCtrl', function($scope, $rootScope) {

  // var invokeColors = colorService.changeColor();

  var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];

$(document).ready(function() {

  changeColor();
  $('.btn-primary').on('click', changeColor);

  function changeColor() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    $('body').animate({
        backgroundColor: randomColor,
        color: randomColor
    }, 800);
    $('.btn-primary').animate({
        backgroundColor: randomColor,
        color: randomColor
    }, 800);
  }




});

});
