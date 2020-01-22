const { notAnString } = require('./utils');

function thirtyOrAbove(age) {
    return age >= 30;
}

function danishNationality(nationality = '') {

    if (notAnString(nationality)) return;

    const REQUIRED_NATIONALITY = 'danish';
    return nationality.toLowerCase() === REQUIRED_NATIONALITY.toLowerCase();
}

function notAffectedByAlcohol(BAC = 0.0) {

    if (isNaN(BAC)) return;

    const MAXIMUM_ALLOWED_BAC = 0.5;
    return BAC <= MAXIMUM_ALLOWED_BAC;
}


module.exports = {
    thirtyOrAbove,
    danishNationality,
    notAffectedByAlcohol
}