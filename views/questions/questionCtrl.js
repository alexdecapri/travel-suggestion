var app = angular.module('travelApp');

app.controller('questionCtrl', function($scope, q1Service, q2Service, q3Service) {


  $scope.testAnswer = function() {
    alert("test");
    console.log($scope.q1Answer);
  }

});
