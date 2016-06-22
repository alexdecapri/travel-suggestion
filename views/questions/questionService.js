var app = angular.module('travelApp');

app.service('questionService', function($q) {

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


  this.buildCountries = function(region, budget, type){
      var countries = _.where(countriesList, {region: region, budget: budget, type: type});
      return countries;
      // return {
      //   region: region,
      //   budget: budget,
      //   type: type,
      //   countries: countries
      // }
  }





});
