
const { morten, freya, benny } = require('./drivers');
const { notAffectedByAlcohol, notAffectedByDrugs, speciesAllowedToDrive } = require('.conditions');

function ableToDrive(driver) {
    const { age, BAC, drugs, prescriptionMedication, species } = driver;

    const conditions = [
        notAffectedByAlcohol(BAC),
        notAffectedByDrugs(drugs),
        notMixingAlcoholAndMedicine(BAC, prescriptionMedication),
        seventeenOrAbove(age),
        speciesAllowedToDrive(species),
        hasDrivingExperience(driver)
    ]; //?

    return conditions.every(condition => condition); //?
}


// if (ableToDrive(benny)) {
//     console.log('I´ll drive');
// } else {
//     console.log('Better not drive');
// }





