const vacationRepository = require('../repository/VacationRepository.js');

function insertVacation(vacation) {
    return new Promise(function(resolve, reject) {
        vacationRepository.insertVacation(vacation)
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

function deleteVacation(vacation) {
    return new Promise(function(resolve, reject) {
        vacationRepository.deleteVacation(vacation)
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

function getAllVacation() {
    return new Promise(function(resolve, reject) {
        vacationRepository.getAllVacation()
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

module.exports = { insertVacation, deleteVacation, getAllVacation };