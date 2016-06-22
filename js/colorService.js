var app = angular.module('travelApp');

app.service('colorService', function() {

  this.changeColor = function() {
    var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var page = document.body;
    var btns = document.getElementsByClassName('btn-primary');
    page.style.backgroundColor = randomColor;
    page.style.color = randomColor;

    for (var i = 0; i < btns.length; i++) {
      btns[i].style.backgroundColor = randomColor;
      btns[i].style.borderColor = randomColor;
    }

  }

});
