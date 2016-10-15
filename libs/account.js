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
      'url'    : this.urlWithEntity(),
      'method' :'GET',
      'qs'     : {
        'key'  : this.apiKey()
      },
      'json'   : true
    });
  },
  getAllByType          : function(type) {
    return request({
      'url'   : this.urlWithEntity(),
      'method':'GET',
      'qs'    : {
        'key'  : this.apiKey(),
        'type' : type
      },
      'json'  : true
    });
  },
  getAccountById        : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getAllByCustomerId : function(customerId) {
    return request({
      'url'    : this.urlWithCustomerEntity()+customerId+'/accounts',
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  updateAccount         : function(accountId, account) {
  },
  createAccount         : function(custID, account) {
  },
  deleteAccount         : function(accountId) {
  }
};
