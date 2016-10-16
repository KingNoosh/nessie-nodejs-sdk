# nessie-nodejs-sdk

The [nessie-nodejs-sdk module](https://www.npmjs.com/package/nessie-nodejs-sdk) interfaces Node.js developers with Capital One's Hackathon API.  Simply require 'nessie-nodejs-sdk' and gain access to the API methods.  Documentation for Capital One's API can be found at [http://reimaginebanking.com/documentation](http://api.reimaginebanking.com/documentation).

## Installation

Run the following command in the root of your node project to download and add to your package.json the module:

    $ npm install nessie-nodejs-sdk --save

## Usage

1. Require the module

    ````javascript
    const nessie = 'nessie-nodejs-sdk';
    ````

2. Go to [http://reimaginebanking.com](http://api.reimaginebanking.com/documentation) and sign up for an API Key with your Github account.  Read the documentation on the API and go to your Profile page and retrieve your API key.  Once you retrive your key you must specify the key in your project to gain access to the API.

    ````javascript
    nessie.setApiKey = "YOUR_API_KEY"
    ````

    You will see that you are assigned two api keys when signing up for the API.  These keys have different roles and permissions assigned to them.

    **Enterprise Key** - Take on the role of a Capital One employee. Only GET requests are permitted.
    **Customer Key** - Take on the role of a Capital One customer. All requests involving your assigned customers and anything they own are permitted.

## Development

After checking out the repo, run `npm install` to install dependencies. Then, run `node` for an interactive prompt that will allow you to experiment.

## Contributing

1. Fork it ( https://github.com/[my-github-username]/nessie-nodejs-sdk/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
