'use strict';
describe("LoginController", function(){
	var $httpBackend, $rootScope, createController, loginRequestHandler;

	beforeEach(module('concentrator'));

	var $controller;


	beforeEach(inject(function(_$controller_, _$injector_){
		$httpBackend = $injector.get('$httpBackend');
		$controller = _$controller_;
	}));

	describe('$scope.ok', function(){
		it('tries to use webservices to acquire a login token', function(){
			
	
		});
	});
});