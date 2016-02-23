'use strict';

// Declare app level module which depends on views, and components
angular.module('concentrator', [
	'ngRoute',
	'ngResource',
	'ngAnimate',
	'concentrator.overview',
	'concentrator.login',
	'concentrator.product',
	'ui.bootstrap'
	])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/overview'});
}]);


