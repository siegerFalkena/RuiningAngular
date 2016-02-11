'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.view1',
	'myApp.version',
	'ui.bootstrap',
	'ngAnimate'
	])
.controller('core', function($scope, $uibModal, $log){
		
		$scope.items = ['item1', 'item2', 'item3'];

		$scope.animationsEnabled = true;

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

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

		$scope.toggleAnimation = function () {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};
	})
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);

	angular.module('myApp.modal',['ui.bootstrap.modal']).controller('ModalInstanceCtrl',  function($scope, $uibModalInstance, items){
		$scope = items;

		$scope.selected = {
			item: $scope.items[0]
		};

		$scope.ok = function (){
			$uibModalInstance.close($scope.selected.item);
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');

		}
	});


