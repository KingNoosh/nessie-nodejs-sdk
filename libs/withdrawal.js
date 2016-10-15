const request = require('request-promise');
module.exports = {
  apiKey               : function() {
    return module.parent.exports.apiKey;
  },
  urlWithEntity        : function() {
    return module.parent.exports.baseUrl+'/withdrawals/';
  },
  urlWithAccountEntity : function() {
    return module.parent.exports.baseUrl+'/accounts/';
  },
  getAllByAccountId    : function(accID) {
    return request({
      'url'    : this.urlWithAccountEntity()+accID+'/withdrawals',
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getById              : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  update               : function(id, json) {
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
  create               : function(accID, json) {
    return request({
      'url'    : this.urlWithAccountEntity()+accID+'/withdrawals',
      'method' : 'POST',
      'qs'     : {
        'key' : this.apiKey()
      },
      'body'   : json,
      'json'   : true
    });
  },
  delete               : function(id) {
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
