angular.module('backEndMock', ['concentrator', 'ngMockE2E']).run(function($httpBackend, ServerDataModel){
	var products = [
	{
		id: 1,
		name: 'Boormachine',
		producent: 'Makita',
		price: 9.99,
		stores : [
			{id: 2, name: 'boormachinewinkel', quantity: 2}
		]
	},{
		id: 2,
		name: 'Andere Boormachine',
		producent: 'CAT',
		price: 300.00,
		stores : [
			{id: 1, name: 'bouwstore', quantity: 3}
		]

	},{
		id: 3,
		name: 'koffieapparaat',
		producent: 'Brouwer',
		price: 9.99,
		stores : [
			{id: 3, name: 'simon levelt', quantity: 3}
		]
	}
	]

	$httpBackend.whenGET('/products').respond(function(method, url, data){
		console.log("forms");
		return [200, products, {}];
	});

	$httpBackend.whenPOST('/product/').respond()
		

});
