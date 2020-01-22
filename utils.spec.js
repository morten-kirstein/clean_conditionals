const { notAnString } = require('./utils');
const assert = require('assert');

describe('Utils', () => {

    describe('Not A String', function () {


        it('should return false if passed a string ', () => {
            const value = 'hello';
            const actual = notAnString(value);
            const expected = false;
            assert.equal(actual, expected);
        });



        it('should return true if passed a number', () => {
            const value = 1;
            const actual = notAnString(value);
            const expected = true;
            assert.equal(actual, expected);
        });

    });
});