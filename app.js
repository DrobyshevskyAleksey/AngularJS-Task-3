var forecast = angular.module('forecast', []);

forecast.controller('forecastController', function($scope, $http) {
	$scope.cities = ['Homyel', 'Minsk', 'Dubai', 'Mexico', 'Rome'];
	$scope.$watch('city', function() {
		$http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + "&units=metric").then(function(response) {
			$scope.data = response.data;
		});
	});
});
