async function getZkSyncProvider(zksync, networkName)
{
    let zkSyncProvider;
    try
    {
        zkSyncProvider = await zksync.getDefaultProvider(networkName);

    } catch(error)
    {
        console.log('Unable to connect to zkSync.')
        console.log(error)
    }
    return zkSyncProvider;
}