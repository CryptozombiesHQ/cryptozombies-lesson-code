(async () => {
  const ethers = require('ethers')
  const zksync = require('zksync')
  const utils = require('./utils')
  const token = 'ETH'
  const amountToDeposit = '0.05'
  const amountToTransfer = '0.02'
  const amountToWithdraw = '0.002'

  const zkSyncProvider = await utils.getZkSyncProvider(zksync, process.env.NETWORK_NAME)
  const ethersProvider = await utils.getEthereumProvider(ethers, process.env.NETWORK_NAME)
  console.log('Creating a new Rinkeby wallet for Alice')
  const aliceRinkebyWallet = new ethers.Wallet(process.env.ALICE_PRIVATE_KEY, ethersProvider) // Account #78
  console.log(`Alice's Rinkeby address is: ${aliceRinkebyWallet.address}`)
  const aliceInitialRinkebyBalance = await aliceRinkebyWallet.getBalance()
  console.log(`Alice's initial balance on Rinkeby is: ${ethers.utils.formatEther(aliceInitialRinkebyBalance)}`)

  console.log('Creating a zkSync wallet for Alice')
  const aliceZkSyncWallet = await utils.initAccount(aliceRinkebyWallet, zkSyncProvider, zksync)

  console.log('Depositing')
  // Start here

})()
