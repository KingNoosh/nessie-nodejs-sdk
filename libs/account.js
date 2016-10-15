const request = require('request-promise');

module.exports = {
  apiKey: () => module.parent.exports.apiKey,
  urlWithEntity: () => `${module.parent.exports.baseUrl}/accounts/`,
  urlWithCustomerEntity: () => `${module.parent.exports.baseUrl}/customers/`,
  getAll: () => request({
    url: this.urlWithEntity(),
    method: 'GET',
    qs: {
      key: this.apiKey(),
    },
    json: true,
  }),
  getAllByType: type => request({
    url: this.urlWithEntity(),
    method: 'GET',
    qs: {
      key: this.apiKey(),
      type,
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
  getAllByCustomerId: customerId => request({
    url: `${this.urlWithCustomerEntity() + customerId}/accounts`,
    method: 'GET',
    qs: {
      key: this.apiKey(),
    },
    json: true,
  }),
  update: (accountId, account) => request({
    url: this.urlWithEntity() + accountId,
    method: 'PUT',
    qs: {
      key: this.apiKey(),
    },
    body: account,
    json: true,
  }),
  create: (custID, account) => request({
    url: `${this.urlWithCustomerEntity() + custID}/accounts`,
    method: 'POST',
    qs: {
      key: this.apiKey(),
    },
    body: account,
    json: true,
  }),
  delete: accountId => request({
    url: this.urlWithEntity() + accountId,
    method: 'DELETE',
    qs: {
      key: this.apiKey(),
    },
    json: true,
  }),
};
