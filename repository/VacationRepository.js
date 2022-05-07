const baseRepository = require('./BaseRepository.js'),
      filename = 'Vacation';
    
function getAllVacation() {
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

function insertVacation(vacation) {

    return new Promise(function(resolve, reject) {
        baseRepository.XMLtoJSON(filename)
        .then(function(result) {   
            if(result.vacationList.vacation == null || result.vacationList.vacation == undefined) {              
                result.vacationList = {};
                result.vacationList.vacation = [];               
            }
            result.vacationList.vacation.push(vacation);
           
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

function deleteVacation(documentNumber) {

    return new Promise(function(resolve, reject) {
        baseRepository.XMLtoJSON(filename)
        .then(function(result) {            
            var vacations = result.vacationList.vacation;            
            for (var x = 0; x < vacations.length; x++) {                
                var vacation = vacations[x];
                if(vacation.docNumberEmploye[0] == documentNumber) {
                    delete result.vacationList.vacation[x];
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

module.exports = { getAllVacation, insertVacation, deleteVacation };