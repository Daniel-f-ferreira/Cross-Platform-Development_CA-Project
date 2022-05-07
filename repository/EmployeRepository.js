const baseRepository = require('./BaseRepository.js'),
      filename = 'Employe';

function getAllEmployees() {
    return new Promise(function(resolve, reject) {
        baseRepository.XMLtoJSON(filename)
        .then(function(result) {   
            resolve(result);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}
      
function insertEmploye(employe) {

    return new Promise(function(resolve, reject) {
        baseRepository.XMLtoJSON(filename)
        .then(function(result) {             
            if(result.employees.employe == null || result.employees.employe == undefined) {              
                result.employees = {};
                result.employees.employe = [];               
            }  
            result.employees.employe.push(employe);

            baseRepository.JSONtoXML(filename, result, function(error){
                if (error) { 
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        })
        .catch(function(error) {
            reject(error);
        });

    });
   
}

function deleteEmploye(documentNumber) {

    return new Promise(function(resolve, reject) {
        baseRepository.XMLtoJSON(filename)
        .then(function(result) {  
            var employees = result.employees.employe;            
            for (var x = 0; x < employees.length; x++) {                
                var employe = employees[x];
                if(employe.documentNumber[0] == documentNumber) {
                    delete result.employees.employe[x];
                    break;
                }
            }      
             
            baseRepository.JSONtoXML(filename, result, function(error){
                if (error) { 
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        })
        .catch(function(error) {
            reject(error);
        });
    });
    
}

module.exports = { getAllEmployees, insertEmploye, deleteEmploye };