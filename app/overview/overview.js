'use strict';

angular.module('concentrator.overview', ['ngRoute', 'ui.bootstrap.modal'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/overview', {
		templateUrl: 'overview/overview.html',
		controller: 'OverviewCtrl'
	});
}])

.controller('OverviewCtrl', function($scope, $log) {

});



