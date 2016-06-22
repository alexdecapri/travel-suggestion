var app = angular.module('travelApp');

app.service('colorService', function() {

  this.changeColor = function() {
    var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var pageColor = document.body;
    pageColor.style.backgroundColor = randomColor;
    pageColor.style.color = randomColor;
  };

});
