
const morten = {
    age: 42,
    BAC: 0.6,
    drugs: false,
    hasDriversLicense: true,
    species: 'human',
    prescriptionMedication: false
}

const freya = {
    age: (11 * 7),
    BAC: 0.1,
    drugs: '',
    hasDriversLicense: false,
    species: 'dog',
    prescriptionMedication: false
}


const benny = {
    age: 17,
    BAC: 0.0,
    co_driver: {
        age: 30,
        nationality: 'danish'
    },
    drugs: 'coffee',
    hasDriversLicense: false,
    species: 'person',
    prescriptionMedication: false
}


function thirtyOrAbove(age) {
    return age >= 30;
}



function danishNationality(nationality) {
    const REQUIRED_NATIONALITY = 'danish';
    return nationality === REQUIRED_NATIONALITY;
}



function hasExperiencedCoDriver({ age, nationality } = {}) {
    return thirtyOrAbove(age) && danishNationality(nationality); //?
}



function notAffectedByAlcohol(BAC) {
    const MAXIMUM_ALLOWED_BAC = 0.5;
    return BAC <= MAXIMUM_ALLOWED_BAC;
}



function speciesAllowedToDrive(species) {
    const LEGAL_SPECIES = ['human', 'person', 'homosapien'];
    return LEGAL_SPECIES.includes(species.toLowerCase());
}


function notTakingMedicine(medicine) {
    return medicine === false;
}



function notMixingAlcoholAndMedicine(BAC, takingMedicine) {

    if (notTakingMedicine(takingMedicine)) return true;
    if (takingMedicine && lowBAC(BAC)) return true;
    return false;
}


function lowBAC(BAC) {
    const RECOMMENDED_MAXIMUM_BAC = 0.2;
    return BAC <= RECOMMENDED_MAXIMUM_BAC;
}


function notDrinking(BAC) {
    const NO_ALCOHOL_IN_BLOOD = 0.0;
    return BAC === NO_ALCOHOL_IN_BLOOD;
}


function notUsingMedicine(takingMedicine) {
    return takingMedicine === false;
}


function hasDrivingExperience({ hasDriversLicense, age, co_driver } = {}) {

    if (hasDriversLicense) return true;
    if (isOfAgeSeventeen(age)) return hasExperiencedCoDriver(co_driver);

    return false;
}



function isOfAgeSeventeen(age) {
    return age === 17;
}


function notAffectedByDrugs(drug) {

    if (notUsingDrugs(drug)) return true;
    if (usingLegalDrugs(drug)) return true;

    return false; //?
}


function notUsingDrugs(drug) {
    const noDrug = [false, undefined, null, ''];
    return noDrug.includes(drug);
}



function usingLegalDrugs(drug) {
    const LEGAL_DRUGS = ['coffee', 'cat food', 'energy drink'];
    return LEGAL_DRUGS.includes(drug);
}



function seventeenOrAbove(age) {
    const MINIMUM_AGE_FOR_DRIVING = 17;
    return age >= MINIMUM_AGE_FOR_DRIVING;
}


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


module.exports = {
    thirtyOrAbove,
    seventeenOrAbove,
    ableToDrive,
    notUsingDrugs,
    usingLegalDrugs,
    speciesAllowedToDrive
}


