var app = angular.module('travelApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    })
    .state('q1', { //where do you want to go
      url: '/q1',
      templateUrl: 'js/q1/q1Tmpl.html',
      controller: 'q1Ctrl'
    })
    .state('q2', { //what is your budget/wk
      url: '/q2',
      templateUrl: 'js/q2/q2Tmpl.html',
      controller: 'q2Ctrl'
    })
    .state('q3', { //do you want ocean/mtns/or don't care?
      url: '/q3',
      templateUrl: 'js/q3/q3Tmpl.html',
      controller: 'q3Ctrl'
    })
    .state('final', {
      url: '/final',
      templateUrl: 'js/final/finalTmpl.html',
      controller: 'finalCtrl'
    })

  $urlRouterProvider
    .otherwise('/');

});
