//Khai báo và. Gọi module: express, mssql, body-parser, ejs
var express = require('express');
var mssql = require('mssql');
var bodyParser = require('body-parser');
const { render } = require('ejs');

var app = express();
var port = process.env.PORT || 5500;

app.listen(port, function() {
    console.log(`Sever runing port: http://localhost:${port}`)
});
app.use(express.static('Public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// Kết thúc khai báo:



// danh sách sản phẩm theo loại sản phẩm
app.get('/list-sp',function(req,res) {
    res.render('listsp')
})



