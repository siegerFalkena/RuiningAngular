angular.module('concentrator.product', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/product', {
		templateUrl: 'product/product.html',
		controller: 'ProductCtrl'
	});
	

}]).controller('ProductCtrl',['$scope', function($scope){
	var _name = 'product';
	var _price = 9.99;
	$scope.name = {
		name: function(newName){
			return arguments.length ? (_name=newName) : _name;
		}
	}

	$scope.price = {
		price : function(newPrice){
			return arguments.length ? (_price=newPrice) : _price;
		}

	}
}]);

