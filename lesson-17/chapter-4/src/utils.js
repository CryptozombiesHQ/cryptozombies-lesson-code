async function getZkSyncProvider(zksync, networkName) {
    let zkSyncProvider;
    try {
        zkSyncProvider = await zksync.getDefaultProvider(networkName);
    } catch(error) {
        console.log('Unable to connect to zkSync.')
        console.log(error)
    }
    return zkSyncProvider;
}

async function getEthereumProvider (ethers, networkName) {
  let ethersProvider
  try {
    // eslint-disable-next-line new-cap
    ethersProvider = new ethers.getDefaultProvider(networkName)
  } catch (error) {
    console.log('Could not connect to Rinkeby')
    console.log(error)
  }
  return ethersProvider
}

async function initAccount(rinkebyWallet, zkSyncProvider, zksync)
{
    const zkSyncWallet = await zksync.Wallet.fromEthSigner(rinkebyWallet, zkSyncProvider);
    return zkSyncWallet;
}

async function registerAccount (wallet) {
  console.log(`Registering the ${wallet.address()} account on zkSync`)
  // Start here
}
