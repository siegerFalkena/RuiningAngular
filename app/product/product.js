angular.module('concentrator.product', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/product', {
		templateUrl: 'product/product.html',
		controller: 'ProductController'
	}).otherwise({redirectTo: '#/overview'});
	

}]).controller('ProductController',['$scope', function($scope){
	$scope.product = {
		id: 1,
		name: 'Boormachine',
		producent: 'Makita',
		price: 9.99,
		stores : [
			{id: 1, name: 'boormachinewinkel', quantity: 3}
		]
	};
}]);

