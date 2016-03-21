'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', 'AppSrv', function($scope, $http, AppSrv) {
		$scope.selectedArtist = AppSrv.selectedArtist;
		$http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/artists/'+ AppSrv.selectedArtist.id + '/top-tracks?country=US'
        }).then(function successCallback(response) {
            $scope.results = response.data.tracks;
        }, function errorCallback(response) {
            alert("fail");
        });
}]);