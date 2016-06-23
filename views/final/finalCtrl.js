var app = angular.module('travelApp');

app.controller('finalCtrl', function($scope, $rootScope, questionService, finalService, colorService) {

  var invokeColors = colorService.changeColor();

  // console.log($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);

  var selectCountries = questionService.buildCountries($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);
  $scope.countryToDisplay = selectCountries[Math.floor(Math.random() * selectCountries.length)].name;
  var name = selectCountries[Math.floor(Math.random() * selectCountries.length)].name;
  // console.log('countryToDisplay:', $scope.countryToDisplay);

  $scope.fetchInfo = function() {
    finalService.getCountryInfo(name)
    .then(function(response) {
      // console.log('fetchInfo response:', response.data[0]);
      $scope.details = response.data[0];
    }).catch(function(err) {
      console.log(err);
    });
  }
  $scope.fetchInfo();




});
