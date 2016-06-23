var app = angular.module('travelApp');

app.service('questionService', function($q) {

  var countriesList = [
    // americas
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
    },
    {
      name: 'Mexico',
      region: 'americas',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Colombia',
      region: 'americas',
      budget: 'medium',
      type: 'history'
    },
    {
      name: 'Peru',
      region: 'americas',
      budget: 'low',
      type: 'geography'
    },
    {
      name: 'Cuba',
      region: 'americas',
      budget: 'medium',
      type: 'food'
    },
    {
      name: 'Puerto Rico',
      region: 'americas',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'Haiti',
      region: 'americas',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Suriname',
      region: 'americas',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Bahamas',
      region: 'americas',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'Barbados',
      region: 'americas',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'Sant Lucia',
      region: 'americas',
      budget: 'medium',
      type: 'history'
    },
    {
      name: 'Cayman Islands',
      region: 'americas',
      budget: 'high',
      type: 'history'
    },
    {
      name: 'Uruguay',
      region: 'americas',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Belize',
      region: 'americas',
      budget: 'high',
      type: 'history'
    },
    {
      name: 'Costa Rica',
      region: 'americas',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Guatemala',
      region: 'americas',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Honduras',
      region: 'americas',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Nicaragua',
      region: 'americas',
      budget: 'medium',
      type: 'history'
    },
    // Asia
    {
      name: 'Azerbaijan',
      region: 'asia',
      budget: 'medium',
      type: 'history'
    },
    {
      name: 'Armenia',
      region: 'asia',
      budget: 'high',
      type: 'history'
    },
    {
      name: 'Bangladesh',
      region: 'asia',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Japan',
      region: 'asia',
      budget: 'high',
      type: 'history'
    },
    {
      name: 'Jordan',
      region: 'asia',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'North Korea',
      region: 'asia',
      budget: 'medium',
      type: 'history'
    },
    {
      name: 'South Korea',
      region: 'asia',
      budget: 'medium',
      type: 'history'
    },
    {
      name: 'Maldives',
      region: 'asia',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'Kuwait',
      region: 'asia',
      budget: 'medium',
      type: 'food'
    },
    {
      name: 'Phillipines',
      region: 'asia',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Vietnam',
      region: 'asia',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Turkey',
      region: 'asia',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Malaysia',
      region: 'asia',
      budget: 'low',
      type: 'geography'
    },
    {
      name: 'Indonesia',
      region: 'asia',
      budget: 'low',
      type: 'geography'
    },
    {
      name: 'Cambodia',
      region: 'asia',
      budget: 'medium',
      type: 'food'
    },
    {
      name: 'Nepal',
      region: 'asia',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Oman',
      region: 'asia',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Israel',
      region: 'asia',
      budget: 'high',
      type: 'food'
    },
    {
      name: 'Saudi Arabia',
      region: 'asia',
      budget: 'high',
      type: 'food'
    },
    // Africa
    {
      name: 'Nigeria',
      region: 'africa',
      budget: 'high',
      type: 'history'
    },
    {
      name: 'Egypt',
      region: 'africa',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'South Africa',
      region: 'africa',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'Algeria',
      region: 'africa',
      budget: 'high',
      type: 'history'
    },
    {
      name: 'Morocco',
      region: 'africa',
      budget: 'medium',
      type: 'history'
    },
    {
      name: 'Angola',
      region: 'africa',
      budget: 'medium',
      type: 'food'
    },
    {
      name: 'Ethiopia',
      region: 'africa',
      budget: 'medium',
      type: 'food'
    },
    {
      name: 'Kenya',
      region: 'africa',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Uganda',
      region: 'africa',
      budget: 'medium',
      type: 'geography'
    },
    {
      name: 'Botswana',
      region: 'africa',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Madagascar',
      region: 'africa',
      budget: 'high',
      type: 'geography'
    },
    {
      name: 'Gabon',
      region: 'africa',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Chad',
      region: 'africa',
      budget: 'low',
      type: 'geography'
    },
    {
      name: 'Mali',
      region: 'africa',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Rwanda',
      region: 'africa',
      budget: 'low',
      type: 'history'
    },
    {
      name: 'Togo',
      region: 'africa',
      budget: 'low',
      type: 'food'
    },
    {
      name: 'Ivory Coast',
      region: 'africa',
      budget: 'high',
      type: 'food'
    },
    // Europe
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
    },
    {
      name: '',
      region: 'europe',
      budget: '',
      type: ''
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
