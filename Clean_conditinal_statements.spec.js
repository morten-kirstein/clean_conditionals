const app = require('./Clean_conditinal_statements');
const assert = require('assert')

describe('Clean Conditional Statements App', () => {


    describe('ThirtyOrAbove condition', () => {

        it('should return true if Age is 30', () => {
            const actual = app.thirtyOrAbove(30);
            const expected = true;
            assert.equal(actual, expected);
        });



        it('should return true if Age is above 30', () => {
            const actual = app.thirtyOrAbove(40);
            const expected = true;
            assert.equal(actual, expected);
        });



        it('should return false if Age is less then 30', () => {
            const actual = app.thirtyOrAbove(29);
            const expected = false;
            assert.equal(actual, expected);
        });



        it('should return false if no age params is given', () => {
            const actual = app.thirtyOrAbove();
            const expected = false;
            assert.equal(actual, expected);
        });

    });



    it('', () => {
        const AGE = 16;

        const actual = app.seventeenOrAbove(AGE);
        const expected = false;

        assert.equal(actual, expected)

    });



    it('return false on any drugs', function () {

        const drug = 'weed';
        const actual = app.notUsingDrugs(drug)
        const expected = false;

        assert.equal(actual, expected);
    });


    it('using legal drugs', function () {

        const drug = 'cat food';
        const actual = app.usingLegalDrugs(drug)
        const expected = true;

        assert.equal(actual, expected);
    });


    it('only humans is allowed to drive', function () {

        const species = 'AI';
        const actual = app.speciesAllowedToDrive(species)
        const expected = false;

        assert.equal(actual, expected);
    });


    it('AI is ', function () {

        const species = 'Human';
        const actual = app.speciesAllowedToDrive(species)
        const expected = true;

        assert.equal(actual, expected);
    });






    xit('', () => {


        const morten = {
            age: 42,
            BAC: 0.6,
            drugs: false,
            hasDriversLicense: true,
            species: 'human',
            prescriptionMedication: false
        }


        const actual = app.ableToDrive(morten) //?
        const expected = false;
        assert.equal(actual, expected)
    });




});



