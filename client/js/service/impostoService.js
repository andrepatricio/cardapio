angular.module("pedidos").factory("impostoService", function (impostoValue) {
    var _calcularImposto = function (preco) {
        return preco * impostoValue.aliquota;
    };

    return {
        calcularImposto: _calcularImposto
    };
});