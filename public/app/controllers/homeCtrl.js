var app = angular.module('cityblocks');

app.controller('homeCtrl', function($scope, uiGmapGoogleMapApi){
	$scope.map = { 
		center: { latitude: 41.850033, longitude: -87.6500523 }, 
		zoom: 5 };

  // uiGmapGoogleMapApi.then(function(maps) {

  // });

});