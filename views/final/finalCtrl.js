var app = angular.module('travelApp');

app.controller('finalCtrl', function($scope, $rootScope, questionService) {

  // console.log($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);

  var selectCountries = questionService.buildCountries($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);
  $scope.countryToDisplay = selectCountries[Math.floor(Math.random() * selectCountries.length)].name;
  console.log($scope.countryToDisplay);


});
