const conditions = require('./conditions');
const assert = require('assert')

describe('Thirty or above', () => {

    it('should return true if Age is 30', () => {
        const actual = conditions.thirtyOrAbove(30);
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if Age is above 30', () => {
        const actual = conditions.thirtyOrAbove(40);
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return false if Age is less then 30', () => {
        const actual = conditions.thirtyOrAbove(29);
        const expected = false;
        assert.equal(actual, expected);
    });



    it('should return false if no age params is given', () => {
        const actual = conditions.thirtyOrAbove();
        const expected = false;
        assert.equal(actual, expected);
    });

});



describe('Danish nationality', () => {

    it('should return true if the nationality is "danish"', () => {
        const actual = conditions.danishNationality('danish');
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if the nationality is capatalized "Danish"', () => {
        const actual = conditions.danishNationality('Danish');
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return false if the nationality is other then "danish" ', () => {
        const actual = conditions.danishNationality('German');
        const expected = false;
        assert.equal(actual, expected);
    });



    it('should return false no params are given', () => {
        const actual = conditions.danishNationality();
        const expected = false;
        assert.equal(actual, expected);
    });



    it('should return undefined if nationality params, are not of type "string"', () => {
        const actual = conditions.danishNationality(1);
        const expected = undefined;
        assert.equal(actual, expected);
    });
});


describe('Not affected by alcohol', () => {


    it('should return true if BAC is less then "0.5"', () => {
        const actual = conditions.notAffectedByAlcohol(0.4);
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if BAC is equal to "0.5"', () => {
        const actual = conditions.notAffectedByAlcohol(0.5);
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return false if BAC is greater then "0.5"', () => {
        const actual = conditions.notAffectedByAlcohol(0.6);
        const expected = false;
        assert.equal(actual, expected);
    });



    it('should return true if BAC params are not given', () => {
        const actual = conditions.notAffectedByAlcohol();
        const expected = true;
        assert.equal(actual, expected);
    });


    it('should return undefined if BAC is not of type number', () => {
        const actual = conditions.notAffectedByAlcohol('0,5');
        const expected = undefined;
        assert.equal(actual, expected);
    });
});



describe('Not affected by drugs', () => {

    it('should return true if "false" is passed in', () => {
        const actual = conditions.notAffectedByDrugs(false);
        const expected = true;
        assert.equal(actual, expected);
    });

    it('should return true if "undefined" is passed in', () => {
        const actual = conditions.notAffectedByDrugs(undefined);
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if "null" is passed in', () => {
        const actual = conditions.notAffectedByDrugs(null);
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if an empty string "" is passed in', () => {
        const actual = conditions.notAffectedByDrugs("");
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return false if the string "weed" is passed in', () => {
        const actual = conditions.notAffectedByDrugs('weed');
        const expected = false;
        assert.equal(actual, expected);
    });


    it('should return false if the capatalized string "Weed" is passed in', () => {
        const actual = conditions.notAffectedByDrugs('Weed');
        const expected = false;
        assert.equal(actual, expected);
    });
});


describe('Using legal drugs', () => {

    it('should return true if an empty string "" is passed in', () => {
        const actual = conditions.usingLegalDrugs('');
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if "coffee" is passed in', () => {
        const actual = conditions.usingLegalDrugs('coffee');
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if "cat food" is passed in', () => {
        const actual = conditions.usingLegalDrugs('cat food');
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return true if "energy drink" is passed in', () => {
        const actual = conditions.usingLegalDrugs('energy drink');
        const expected = true;
        assert.equal(actual, expected);
    });



    it('should return false if "weed" is passed in', () => {
        const actual = conditions.usingLegalDrugs('weed');
        const expected = false;
        assert.equal(actual, expected);
    });
});



