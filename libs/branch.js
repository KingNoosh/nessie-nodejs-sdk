const request = require('request-promise');
module.exports = {
  apiKey        : function() {
    return module.parent.exports.apiKey;
  },
  urlWithEntity : function() {
    return module.parent.exports.baseUrl+'/branches/';
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
  getBranch     : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  }
}
