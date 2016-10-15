const request               = require('request-promise');
module.exports = {
  apiKey             : function() {
    return module.parent.exports.apiKey;
  },
  urlWithEntity         : function() {
    return module.parent.exports.baseUrl+'/accounts/';
  },
  urlWithCustomerEntity : function() {
    return module.parent.exports.baseUrl+'/customers/';
  },
  getAllAccounts        : function() {
    return request({
      'url'  : this.urlWithEntity(),
      'qs'   : {
        'key' : this.apiKey()
      },
      'json' : true
    });
  },
  getAllByType          : function(type) {
  },
  getAccountById        : function(id) {
  },
  getAllByCustomerId : function(customerId) {
  },
  updateAccount         : function(accountId, account) {
  },
  createAccount         : function(custID, account) {
  },
  deleteAccount         : function(accountId) {
  }
};
