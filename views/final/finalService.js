var app = angular.module('travelApp');

app.service('finalService', function($http, $q) {

  this.getCountryInfo = function(name) {
    // console.log('NAME IN SERVICE', name);
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v1/name/' + name,
    }).then(function(response) {
      dfd.resolve(response);
      // console.log(response.data[0].name);
      // console.log(response.data);
    }).catch(function(err) {
      console.error('Error message:', err);
      dfd.reject(err);
    })
    return dfd.promise;
  }

});
