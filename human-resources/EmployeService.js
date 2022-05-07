const employeRepository = require('../repository/EmployeRepository.js');

function insertEmploye(employe) {   
    return new Promise(function(resolve, reject) { 
        employeRepository.insertEmploye(employe)
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

function deleteEmploye(employe) {
    return new Promise(function(resolve, reject) {
        employeRepository.deleteEmploye(employe)
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
});
}

function getAllEmployees() {
    return new Promise(function(resolve, reject) {
        employeRepository.getAllEmployees()
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
    });    
}

module.exports = { insertEmploye, deleteEmploye, getAllEmployees };