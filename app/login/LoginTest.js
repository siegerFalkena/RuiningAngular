'use strict';
describe('concentratorLogin', function(){
	var $httpBackend, $cookies, $controller, $uibModalInstance, controller;

	beforeEach(module('concentratorLogin'));

	var $injector;
	beforeEach(inject(function(_$injector_){
		$injector = _$injector_;
		$controller = $injector.get('$controller');
		$httpBackend = $injector.get('$httpBackend');
		$cookies = $injector.get('$cookies');
	}));

	it('login', function(){
		var $scope = {};
		var controller = $controller('HomeCtrl', {$scope: $scope});
		$scope.opentheBook('myModalContent.html', 'animated zoomIn');
	});

});