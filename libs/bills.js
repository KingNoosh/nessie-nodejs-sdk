const request = require('request-promise');
module.exports = {
  apiKey                : function() {
    return module.parent.exports.apiKey;
  },
  urlWithEntity         : function() {
    return module.parent.exports.baseUrl+'/bills/';
  },
  urlWithAccountEntity  : function() {
    return module.parent.exports.baseUrl+'/accounts/';
  },
  urlWithCustomerEntity : function() {
    return module.parent.exports.baseUrl+'/customers/';
  },
  getAllByAccountId     : function(accID) {
    return request({
      'url'    : this.urlWithAccountEntity()+accID+'/bills',
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getAllByCustomerId    : function(custID) {
    return request({
      'url'    : this.urlWithCustomerEntity()+custID+'/bills',
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getBill               : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  updateBill            : function(id, json) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' : 'PUT',
      'qs'     : {
        'key' : this.apiKey()
      },
      'body'   : json,
      'json'   : true
    });
  },
  createBill            : function(accID, json) {
    return request({
      'url'    : this.urlWithAccountEntity()+accID+'/bills',
      'method' : 'POST',
      'qs'     : {
        'key' : this.apiKey()
      },
      'body'   : json,
      'json'   : true
    });
  },
  deleteBill            : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' : 'DELETE',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  }
};
