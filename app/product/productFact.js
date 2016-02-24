'use strict';

var productFact = angular.module('productFact', []);

productFact.factory('getProduct', ['$http', '$log', function($http, $log){
    function getProduct(id){
        var location = '/product/' + id; 
        $http(location);
    }
}]);