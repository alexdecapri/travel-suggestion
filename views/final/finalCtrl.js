var app = angular.module('travelApp');

app.controller('finalCtrl', function($scope, $rootScope, questionService, finalService) {

  // console.log($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);

  var selectCountries = questionService.buildCountries($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);
  $scope.countryToDisplay = selectCountries[Math.floor(Math.random() * selectCountries.length)].name;
  var name = selectCountries[Math.floor(Math.random() * selectCountries.length)].name;
  console.log('countryToDisplay:', $scope.countryToDisplay);

  $scope.fetchInfo = function() {
    finalService.getCountryInfo(name)
    .then(function(response) {
      console.log('fetchInfo response:', response);
      $scope.details = response;
    }).catch(function(err) {
      console.log(err);
    });
  }
  $scope.fetchInfo();

  console.log('info', $scope.details);



  // $scope.fetchInfo = finalService.getCountryInfo($scope.countryToDisplay);

  // console.log($scope.fetchInfo);



});
