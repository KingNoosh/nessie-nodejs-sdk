const request = require('request-promise');

module.exports = {
  apiKey: () => module.parent.exports.apiKey,
  urlWithEntity: () => `${module.parent.exports.baseUrl}/atms/`,
  getAll: () => request({
    url: this.urlWithEntity(),
    method: 'GET',
    qs: {
      key: this.apiKey(),
    },
    json: true,
  }),
  getById: id => request({
    url: this.urlWithEntity() + id,
    method: 'GET',
    qs: {
      key: this.apiKey(),
    },
    json: true,
  }),
  getByLocation: (lat, lng, rad) => request({
    url: this.urlWithEntity(),
    method: 'GET',
    qs: {
      key: this.apiKey(),
      lat,
      lng,
      rad,
    },
    json: true,
  }),
};
