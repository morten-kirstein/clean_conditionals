const utils = {

    isDecimalNumber(number) {
        return number % 1 != 0;
    },

    notAnString(value) {
        return typeof (value) != 'string';
    },

    notAnNumber(value) {
        return typeof (value) != 'number';
    }
}

module.exports = utils;




