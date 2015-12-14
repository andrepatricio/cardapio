angular.module("pedidos").controller("pedidosCtrl", function ($scope, impostoService, cardapio) {
    $scope.cardapio = cardapio.data;

    $scope.pedidos = [];
    $scope.total = 0;

    $scope.fazerPedido = function (pedido) {
        pedido.subtotal = pedido.quantidade * pedido.item.preco;
        pedido.imposto = impostoService.calcularImposto(pedido.subtotal);
        pedido.subtotal = pedido.subtotal + pedido.imposto;
        pedido.data = new Date();
        $scope.pedidos.push(pedido);
        delete $scope.pedido;
        $scope.pedidoForm.$setPristine();
        atualizarTotal();
    };

    $scope.cancelarPedidos = function (pedido) {
        $scope.pedidos = $scope.pedidos.filter(function (pedido) {
            return !pedido.selecionado;
        });
        atualizarTotal();
    };

    var atualizarTotal = function () {
        var total = 0;
        $scope.pedidos.forEach(function (pedido) {
            total += pedido.subtotal;
        });
        $scope.total = total;
    };

    $scope.isSelecionado = function () {
        return $scope.pedidos.some(function (pedido) {
            return pedido.selecionado;
        });
    };
});