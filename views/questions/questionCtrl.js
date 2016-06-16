var app = angular.module('travelApp');

app.controller('questionCtrl', function($scope, $rootScope, questionService) {



  $scope.testAnswer = function() {
    alert("test");
    console.log($scope.q1Answer);
  }

});
