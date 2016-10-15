const request = require('request-promise');
module.exports = {
  apiKey        : function() {
    return module.parent.exports.apiKey;
  },
  urlWithEntity : function() {
    return module.parent.exports.baseUrl+'/merchants/';
  },
  getAll        : function() {
    return request({
      'url'    : this.urlWithEntity(),
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getById       : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  update        : function(id, json) {
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
  create        : function(json) {
    return request({
      'url'    : this.urlWithEntity(),
      'method' : 'POST',
      'qs'     : {
        'key' : this.apiKey()
      },
      'body'   : json,
      'json'   : true
    });
  }
};
