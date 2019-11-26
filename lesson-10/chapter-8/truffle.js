// Initialize HDWalletProvider
const HDWalletProvider = require("truffle-hdwallet-provider");

const LoomTruffleProvider = require('loom-truffle-provider');

const mnemonic = "YOUR_MNEMONIC";

module.exports = {
 
  networks: {
   
    mainnet: {
      provider: function () {
       
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
      },
      network_id: "1"
    },
   
    rinkeby: {
     
      provider: function () {
       
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/YOUR_TOKEN")
      },
     
      network_id: 4
    },
   
    loom_testnet: {
      provider: function() {
          const privateKey = 'YOUR_PRIVATE_KEY'
          const chainId = 'extdev-plasma-us1';
          const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc';
          const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query';;
          return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
      },
      network_id: '9545242630824'
    }
  }
};
