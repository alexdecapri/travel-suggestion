var app = angular.module('travelApp');

app.controller('questionCtrl', function($scope, $rootScope, questionService, $log) {

  // var answersObj = {$rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer};

  $scope.buildCountries = questionService.buildCountries($rootScope.q1Answer, $rootScope.q2Answer, $rootScope.q3Answer);




});
