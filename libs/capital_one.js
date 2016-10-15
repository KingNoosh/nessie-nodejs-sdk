module.exports = {
  baseUrl    : "http://api.reimaginebanking.com:80",
  apiKey     : "",
  setApiKey  : function(apiKey) {
    this.apiKey = apiKey;
  },
  account    : require('./account.js'),
  atm        : require('./atm.js'),
  bills      : require('./bills.js'),
  branch     : require('./branch.js'),
  customer   : require('./customer.js'),
  deposit    : require('./deposit.js'),
  merchant   : require('./merchant.js'),
  purchase   : require('./purchase.js'),
  transfer   : require('./transfer.js'),
  withdrawal : require('./withdrawal.js')
};

