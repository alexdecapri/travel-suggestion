var app = angular.module('travelApp');

app.service('questionService', function() {

  var countries = [
    {
      name: 'United States',
      region: 'americas',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Canada',
      region: 'americas',
      budget: 'high',
      type: 'food'
    },
    {
      name: 'Brazil',
      region: 'americas',
      budget: 'medium',
      type: 'food'
    },
    {
      name: 'Argentina',
      region: 'americas',
      budget: 'low',
      type: 'geography'
    },
    {
      name: 'Panama',
      region: 'americas',
      budget: 'low',
      type: 'history'
    }
  ];

  this.selectedCountries = [];

  this.getCountry = function(region, budget, type) {
    for (var i = 0; i < countries.length; i++) {
      console.log('working?');
    }
  }



  //REST countries API https://restcountries.eu/

});
