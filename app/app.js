'use strict';

// Declare app level module which depends on views, and components
angular.module('concentrator', [
	'ngRoute',
	'ngCookies',
	'concentrator.overview',
	'concentratorLogin',
	'concentrator.product',
	'ui.bootstrap'
	])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/overview'});
}]).controller('indexController', ['$cookies', '$scope', '$log', function($cookies, $scope, $log){
	
	$scope.init = function(){
		var cookie = $cookies.get('loggedIn');
		if (cookie === undefined) {
			$cookies.put('loggedIn', false);
		}
	};

}]);