module.exports = {
  baseUrl   : "http://api.reimaginebanking.com:80",
  apiKey    : "",
  setApiKey : function(apiKey) {
    this.apiKey = apiKey;
  }
};

module.exports.account    = require('./account.js');
module.exports.atm        = require('./atm.js');
module.exports.bills      = require('./bills.js');
module.exports.branch     = require('./branch.js');
