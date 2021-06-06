const express = require('express')
const func = require('./function');
const app = express();
const bitcoin0 = require('./read/bitcoinList/bitcoinList.js');
// const bitcoin1 = require('./update/bitcoin/bitcoin.js');
const port = 8888;

app.get('/', (req, res) => {
  res.send("OK SUCCESS!");
})

app.get('/read/bitcoinList', bitcoin0.bitcoinList);

// app.post('update/bitcoin', bitcoin1.bitcoinList);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})