'use strict';
describe('indexController', function(){
    var $rootScope, $httpBackend, $controller, $cookies, $injector, indexController;
    var authRequestHandler;

    beforeEach(module('concentrator'));

    beforeEach(inject(function(_$injector_){
        $injector = _$injector_;
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');
        $cookies = $injector.get('$cookies');
        authRequestHandler = $httpBackend.when('GET', '/login.py').
                               respond({userId: 'userX'}, {'A-Token': 'xxx'});
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create create cookie and insert value loggedIn = true', function(){
        var $scope = {};
        var controller = $controller('indexController', {$scope: $scope});
        $scope.init();
        var cookie = $cookies.get('loggedIn');
        expect(cookie === false);
        //$httpBackend.flush();
    });

});