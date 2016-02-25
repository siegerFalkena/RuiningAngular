'use strict';
describe('concentratorLogin', function(){
	var $httpBackend, $cookies, $controller, $uibModalInstance, controller, authRequestHandler;

	beforeEach(module('concentratorLogin'));

	var $injector;
	beforeEach(inject(function(_$injector_){
		$injector = _$injector_;
		$controller = $injector.get('$controller');
		$httpBackend = $injector.get('$httpBackend');
		$cookies = $injector.get('$cookies');
		authRequestHandler = $httpBackend.when('GET', '/login.py').
                               respond({userId: 'userX'}, {'A-Token': 'xxx'});
	}));

	it('login', function(){
		var $scope = {};
		var controller = $controller('HomeCtrl', {$scope: $scope});
		$scope.opentheBook('myModalContent.html', 'animated zoomIn');
	});

});