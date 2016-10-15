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
  }
};
