 "use strict";

var VaccinationContract = function () {
      LocalContractStorage.defineMapProperty(this, "userVaccinesMap");
}

VaccinationContract.prototype = {
    init: function () {
    },
    setVaccines: function (vaccineArray) {
        //Set Data
        var user = Blockchain.transaction.from;
        this.userVaccinesMap.set(user, vaccineArray);

    },
    getVaccines: function () {
        //Get Data
        var user = Blockchain.transaction.from;
        return this.userVaccinesMap.get(user);
    },

/* Have to add this function to blockchain */
    getVaccinesByAddress: function(addr){
      var user = addr;
      return this.userVaccinesMap.get(user);
    }
};

module.exports =VaccinationContract;
