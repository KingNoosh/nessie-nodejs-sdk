const request = require('request-promise');
module.exports = {
  apiKey           : function() {
    return module.parent.exports.apiKey;
  },
  urlWithEntity    : function() {
    return module.parent.exports.baseUrl+'/atms/';
  },
  getAll           : function() {
    return request({
      'url'    : this.urlWithEntity(),
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getATM           : function(id) {
    return request({
      'url'    : this.urlWithEntity()+id,
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey()
      },
      'json'   : true
    });
  },
  getAtmByLocation : function(lat, lng, rad) {
    return request({
      'url'    : this.urlWithEntity(),
      'method' :'GET',
      'qs'     : {
        'key' : this.apiKey(),
        'lat' : lat,
        'lng' : lng,
        'rad' : rad
      },
      'json'   : true
    });
  },
};
