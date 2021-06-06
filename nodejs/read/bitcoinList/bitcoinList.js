const func = require('../../function');

function bitcoinList(req, res){
    func.getBitcoinList((bitCoinList) => {
        res.send(bitCoinList);
    });
};

module.exports = {
    bitcoinList : bitcoinList
}