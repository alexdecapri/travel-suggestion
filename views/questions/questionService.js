var app = angular.module('travelApp');

app.service('questionService', function($log, $q) {

  var countriesList = [
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
      type: 'geography'
    }
  ];

  this.getCountry = function(region, budget, type) {
    for (var i = 0; i < countries.length; i++) {
      $log.log(i)
    }
  }

  this.buildCountries = function(region, budget, type, countries){
      countries = _.where(countriesList, {region: region, budget: budget, type: type});
      return {
        region: region,
        budget: budget,
        type: type,
        countries: countries
      }
  }



  //REST countries API https://restcountries.eu/

});
