var app = angular.module('travelApp');

app.controller('homeCtrl', function($scope, $rootScope, colorService) {

  var invokeColors = colorService.changeColor();

});
