'use strict';
describe('ProductController', function(){
	var $httpBackend, $rootScope, createController, authRequestHandler;

	beforeEach(module('concentrator.product'));

	beforeEach(inject(function($injector){
		// Set up the mock http service responses
		$httpBackend = $injector.get('$httpBackend');
	     // backend definition common for all tests
	     authRequestHandler = $httpBackend.when('GET', '/auth.py')
	     .respond({userId: 'userX'}, {'A-Token': 'xxx'});

	     // Get hold of a scope (i.e. the root scope)
	     $rootScope = $injector.get('$rootScope');
	     // The $controller service is used to create instances of controllers
	     var $controller = $injector.get('$controller');

	     createController = function() {
            $httpBackend.flush();
	     	return $controller('ProductController', {'$scope' : $rootScope });
	     };
	 }));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
    //


});