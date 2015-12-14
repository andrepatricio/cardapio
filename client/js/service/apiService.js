angular.module('pedidos').factory('apiService', function($http){

	var _cardapio = function(){
		return $http.get('/cardapio');	
	} 

	return {
		getCardapio : _cardapio
	};

});