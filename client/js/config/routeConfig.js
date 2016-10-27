angular.module("pedidos").config(function($routeProvider){
	$routeProvider.when("/pedidos", {
		templateUrl: "views/pedidos.html",
		controller: "pedidosCtrl",
		resolve: {
			cardapio: function(apiService){
				return apiService.getCardapio()
			}
		}
	}).when("/administrativo", {
		templateUrl: "views/administrativo.html",
		controller: "administrativoCtrl",
	//	resolve: {
	//		cardapio: function(apiService){
	//			return apiService.getCardapio()
	//		}
		//	}
	}).otherwise({
		redirectTo: "/pedidos"
	});
});