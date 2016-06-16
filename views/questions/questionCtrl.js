var app = angular.module('travelApp');

app.controller('questionCtrl', function($scope, questionService) {


  $scope.testAnswer = function() {
    alert("test");
    console.log($scope.q1Answer);
  }

  var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];

  $(document).ready(function() {

    $('button').click(getRandomColor());

    function getRandomColor() {

      var color = colors[Math.floor(Math.random() * colors.length)];

      $('body').animate({
          backgroundColor: color,
          color: color
      }, 800);
      $('#main-box').animate({
          color: color
      }, 800);
      $('#top-banner').animate({
          color: color
      }, 800);


    }

  });


});
