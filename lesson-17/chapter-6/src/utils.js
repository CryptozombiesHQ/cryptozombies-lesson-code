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

async function registerAccount (wallet)
{
  console.log(`Registering the ${wallet.address()} account on zkSync`)
  if(!await wallet.isSigningKeySet())
  {
      if (await wallet.getAccountId() === undefined)
      {
        throw new Error('Unknown account')
      }
      const changePubkey = await wallet.setSigningKey();
      await changePubkey.awaitReceipt();
  }
  console.log(`Account ${wallet.address()} registered`)
}

async function depositToZkSync(zkSyncWallet, token, amountToDeposit, ethers)
{
    const deposit = await zkSyncWallet.depositToSyncFromEthereum({
        depositTo: zkSyncWallet.address(),
        token: token,
        amount: ethers.utils.parseEther(amountToDeposit)
      });
    try {
        await deposit.awaitReceipt();
    } catch (error) {
        console.log('Error while awaiting confirmation from the zkSync operators.');
        console.log(error);
    }
}

async function transfer (from, toAddress, amountToTransfer, transferFee, token, zksync, ethers) {
  // Start here
}
