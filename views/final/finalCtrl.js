var app = angular.module('travelApp');

app.controller('finalCtrl', function($scope, $rootScope, questionService) {

  console.log($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);

  var countries = questionService.buildCountries($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);

  console.log(countries);

});
