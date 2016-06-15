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
      templateUrl: 'js/about/aboutTmpl.html'
    })
    .state('q1', { //where do you want to go
      url: '/q1',
      templateUrl: 'js/q1/q1Tmpl.html'
    })
    .state('q2', { //what is your budget/wk
      url: '/q2',
      templateUrl: 'js/q2/q2.Tmpl.html'
    })
    .state('q3', { //do you want ocean/mtns/or don't care?
      url: '/q3',
      templateUrl: 'js/q3/q3.Tmpl.html'
    })
    .state('final', {
      url: '/final',
      templateUrl: 'js/final/final.html'
    })

  $urlRouterProvider
    .otherwise('/');

});
