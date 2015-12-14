angular.module("pedidos").filter("limite", function () {
    return function (input, tamanho) {
        if (!input) return input;
        if (input.length <= tamanho) return input;
        return input.substring(0, tamanho) + "...";
    };
});