var app = angular.module('travelApp');

app.controller('questionCtrl', function($scope, questionService) {


  $scope.testAnswer = function() {
    alert("test");
    console.log($scope.q1Answer);
  }

});
