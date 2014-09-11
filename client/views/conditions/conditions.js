/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope','$http', function($scope, $http){
    $scope.title = 'Current Conditions';
    $scope.zip = '37221';

    $scope.getConditions = function(){
      var url =  'http://api.wunderground.com/api/f0e6fdcbf9d5f727/conditions/q/' +$scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.weather     = response.data.current_observation.weather;
        $scope.icon        = response.data.current_observation.icon_url;
        $('#zip').focus();
      });
    };


  }]);
})();

