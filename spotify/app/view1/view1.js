'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$http', 'AppSrv', function($scope, $http, AppSrv) {
    var types = "&type=artist";
    var nextUrl; //if I get to pagination
    $scope.results = [];

    $scope.search = function() {
        $scope.message = "";
    	AppSrv.recentSearch = $scope.searchString;
        $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=' + $scope.searchString + types
        }).then(function successCallback(response) {
            $scope.results = response.data.artists.items;
            if(!$scope.results.length){
                $scope.message = "No results found.";
            }

        }, function errorCallback(response) {
            alert("fail");
        });
    }

    $scope.selectArtist = function(name, id){
    	AppSrv.selectedArtist.name = name;
    	AppSrv.selectedArtist.id = id;
    }


}]);