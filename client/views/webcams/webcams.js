(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Webcams';

    $scope.getWebcams = function(){
      var url = 'http://api.wunderground.com/api/aad218fcd659a15a/webcams/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();
