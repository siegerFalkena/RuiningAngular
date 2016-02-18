'use strict';

var loggedIn = false;

// Declare app level module which depends on views, and components
angular.module('concentrator', [
	'ngRoute',
	'concentrator.overview',
	'concentrator.login',
	'concentrator.product',
	'ui.bootstrap',
	'ngAnimate'
	])
.config(['$routeProvider', function($routeProvider) {
	if( loggedIn) {
		$routeProvider.otherwise({redirectTo: '/login'});
	} else {
		$routeProvider.otherwise({redirectTo: '/overview'});
	}
}]);


