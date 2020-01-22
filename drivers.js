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

module.exports = {
    morten,
    freya,
    benny
}