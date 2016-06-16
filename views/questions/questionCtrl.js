var app = angular.module('travelApp');

app.controller('questionCtrl', function($scope) {

  $scope.q1Answer = "something";

$scope.testAnswer = function() {
  alert("test");
  console.log(q1Answer);
}

});
