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
	     	return $controller('MyController', {'$scope' : $rootScope });
	     };
	 }));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	it('should fail authentication', function() {

     // Notice how you can change the response even after it was set
     authRequestHandler.respond(401, '');

     $httpBackend.expectGET('/auth.py');
     var controller = createController();
     $httpBackend.flush();
     expect($rootScope.status).toBe('Failed...');
 	});


	it('should send msg to server', function() {
		var controller = createController();
		$httpBackend.flush();

     // now you don’t care about the authentication, but
     // the controller will still send the request and
     // $httpBackend will respond without you having to
     // specify the expectation and response for this request

     $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
     $rootScope.saveMessage('message content');
     expect($rootScope.status).toBe('Saving...');
     $httpBackend.flush();
     expect($rootScope.status).toBe('');
 	});

});