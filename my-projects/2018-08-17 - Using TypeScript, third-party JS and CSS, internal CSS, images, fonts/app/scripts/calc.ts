window['Calculator'] = function() {
    function add(a, b) {
        let result = a + b;
        Mediator.publish('calc_calculation_is_done', result);
        return a + b;
    }

    return {
        add: add
    }
};