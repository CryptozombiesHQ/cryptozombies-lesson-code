const HDWalletProvider = require("truffle-hdwallet-provider");
const LoomTruffleProvider = require('loom-truffle-provider');
const mnemonic = "YOUR MNEMONIC HERE";
module.exports = {
   
    networks: {
       
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
            gas: 9500000
        },
       
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>")
            },
            network_id: "1"
        },
       
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/<YOUR_INFURA_API_KEY>")
            },
            network_id: 4
        },
       
        loom_testnet: {
            provider: function() {
                const privateKey = 'YOUR_PRIVATE_KEY';
                const chainId = 'extdev-plasma-us1';
                const writeUrl = 'wss://extdev-basechain-us1.dappchains.com/websocket';
                const readUrl = 'wss://extdev-basechain-us1.dappchains.com/queryws';
                const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
                loomTruffleProvider.createExtraAccountsFromMnemonic(mnemonic, 10);
                return loomTruffleProvider;
            },
            network_id: '9545242630824'
        }
    },
    compilers: {
        solc: {
            version: "0.4.25"
        }
    }
};
