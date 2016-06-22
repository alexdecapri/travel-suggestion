var app = angular.module('travelApp');

app.controller('aboutCtrl', function($scope, colorService) {

  var invokeColors = colorService.changeColor();

});
