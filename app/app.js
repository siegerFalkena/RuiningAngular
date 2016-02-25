'use strict';

// Declare app level module which depends on views, and components
angular.module('concentrator', [
    'ngRoute',
    'ngCookies',
    'ng',
    'concentrator.overview',
    'concentratorLogin',
    'concentrator.product',
    'ui.bootstrap'
    ])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login',{
                templateUrl: 'login/login.html',
                controller: 'indexController'
    }).otherwise({redirectTo: '/overview'});

}]).controller('indexController', 
        ['$cookies', '$scope', '$window', '$http', 'modalService', 
function($cookies, $scope, $window, $http, modalService){
    
    $scope.init = function(){
        var cookie = $cookies.get('loggedIn');
        if (cookie === undefined) {
            $cookies.put('loggedIn', false);
            modalService.openMenuModal('myModalContent.html', 'animated zoomIn');
        }
        cookie = $cookies.get('loggedIn');
        if(cookie === false){
            $window.location.href = 'login';
        }

    };

}]);