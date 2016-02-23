angular.module('concentrator').service('ServerDataModel', function ServerDataModel(){
	this.data = [{
		productId: 1,
		productName: 'makita',
		storeIds:[1,2,3] 
	},
	{
		productId : 2,
		productName: 'element',
		storeIds: [2,3]

	},
	{
		productId : 3,
		productName: 'CAT',
		storeIds : [4,1]

	}];
	
	this.getData = function(){
		return this.data;
	};

	this.setData  = function(data){
		this.data = data;
	};

	this.findById = function (id) {
		var list = $.grep(this.getData(), function(element, index){
			return (element.productId == id);
		});
		if(list.length === 0){
			return {};
		}
		return list[0];


	}

})