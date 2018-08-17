(function () {
    var calc = new window['Calculator']();

    Mediator.subscribe('calc_calculation_is_done', function(result) {
        console.log('Result received from Mediator: ' + result);
    });

    console.log(calc.add(2, 3));
})();
