// new function: custom_sendAsync
function custom_sendAsync(the_method, the_params){
    return new Promise((resolve, reject) => {
        
        web3.currentProvider.send({
            jsonrpc: "2.0",
            method: the_method,
            params: the_params,
            id: new Date().getTime()
        }, (err, resp) => {
            if(!err){
                resolve(resp);
            }
            else reject();
        });

    })
    /* uncomment if you want to catch it here
    .catch((caught)=>{
        return(caught);
    });
    */
};

// use 'increase' as normal here:
async function increase(duration_value) {

    // first, let's increase time
    await custom_sendAsync("evm_increaseTime", [duration_value]);

    //next, let's mine a new block
    await custom_sendAsync("evm_mine", []);

};

const duration = {

    seconds: function (val) {
        return val;
    },
    minutes: function (val) {
        return val * this.seconds(60);
    },
    hours: function (val) {
        return val * this.minutes(60);
    },
    days: function (val) {
        return val * this.hours(24);
    },
}

module.exports = {
    increase,
    duration,
};
