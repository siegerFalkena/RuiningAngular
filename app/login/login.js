'use strict';

angular.module('concentrator.login', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
		$routeProvider.when(
			'/login', {
				templateUrl: 'login/login.html',
				controller: 'LoginModalCtrl'
			})
		.otherwise({redirectTo: '/overview'});
}]).controller('LoginModalCtrl', function($scope, $uibModal, $location) {
	$scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
      
    });
  };
});








