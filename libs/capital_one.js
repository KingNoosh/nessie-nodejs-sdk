module.exports = {
  baseUrl: 'http://api.reimaginebanking.com:80',
  apiKey: '',
  setApiKey(apiKey) {
    this.apiKey = apiKey;
  },
};
module.exports.account = require('./account.js');
module.exports.atm = require('./atm.js');
module.exports.bills = require('./bills.js');
module.exports.branch = require('./branch.js');
module.exports.customer = require('./customer.js');
module.exports.deposit = require('./deposit.js');
module.exports.merchant = require('./merchant.js');
module.exports.purchase = require('./purchase.js');
module.exports.transfer = require('./transfer.js');
module.exports.withdrawal = require('./withdrawal.js');
