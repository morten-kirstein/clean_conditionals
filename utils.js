const utils = {

    isDecimalNumber(number) {
        return number % 1 != 0;
    },

    notAnString(param) {
        return typeof (param) != 'string';
    }
}

module.exports = utils;




