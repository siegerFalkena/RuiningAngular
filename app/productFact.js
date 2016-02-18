app.factory('product', ['$http', function($http){
	
	function Product(productData){
		if (productData){
			this.setData(productData);
		}
	};

	Product.prototype = {
		setData: function(productData){
			angular.extend(this, productData);
		},
		load: function(id) {
			var scope = this;
			$http.get('').success()
			/* Act on the event */
		};

	}




}])