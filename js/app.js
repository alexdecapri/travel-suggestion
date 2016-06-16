var app = angular.module('travelApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    })
    .state('q1', { //where do you want to go
      url: '/q1',
      templateUrl: 'views/questions/q1/q1Tmpl.html',
      controller: 'questionCtrl'
    })
    .state('q2', { //what is your budget/wk
      url: '/q2',
      templateUrl: 'views/questions/q2/q2Tmpl.html',
      controller: 'questionCtrl'
    })
    .state('q3', { //do you want ocean/mtns/or don't care? or history/food/landscape
      url: '/q3',
      templateUrl: 'views/questions/q3/q3Tmpl.html',
      controller: 'questionCtrl'
    })
    .state('final', {
      url: '/final',
      templateUrl: 'views/final/finalTmpl.html',
      controller: 'finalCtrl'
    })

  $urlRouterProvider
    .otherwise('/');

});
