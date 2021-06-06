const axios = require("axios");
const cheerio = require("cheerio");


const getHtml = async () => {
    try {
      return await axios.get("https://kr.investing.com/crypto/");
    } catch (error) {
      console.error(error);
    }
  };
  
const getBitcoin = (cb) => {
getHtml()
.then((html)=>
{
    let bitCoinList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $('table.genTbl tbody tr');

    $bodyList.each((i, elem)=>{
    bitCoinList[i] = {
        name : $(elem).children('td.left').text(),
        price : $(elem).children('td.price').text(),
    }
    console.log($(elem).children('td.left').text());
    console.log($(elem).children('td.price').text());
    })
    cb(bitCoinList);
}).catch((err)=>
{
    console.log(err);
})
}

module.exports = {
    getBitcoinList : getBitcoin
};