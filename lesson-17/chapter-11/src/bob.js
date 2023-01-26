(async () => {
  const ethers = require('ethers')
  const zksync = require('zksync')
  const utils = require('./utils')

  const zkSyncProvider = await utils.getZkSyncProvider(zksync, process.env.NETWORK_NAME);
  const ethersProvider = await utils.getEthereumProvider(ethers, process.env.NETWORK_NAME);

  const bobRinkebyWallet = new ethers.Wallet(process.env.BOB_PRIVATE_KEY, ethersProvider);
  console.log(`Bob's Rinkeby address is: ${bobRinkebyWallet.address}`);
  console.log(`Bob's initial balance on Rinkeby is: ${ethers.utils.formatEther(await bobRinkebyWallet.getBalance())}`);
  const bobZkSyncWallet = await utils.initAccount(bobRinkebyWallet, zkSyncProvider, zksync);
})()
