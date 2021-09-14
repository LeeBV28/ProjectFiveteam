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



// Home
app.get('/',function(req,res) {
    res.render("home")
});

// danh sách sản phẩm theo loại sản phẩm
app.get('/list-sp',function(req,res) {
    res.render('listsp')
});
// Danh sách siêu thị
app.get('/list-supermarket',function(req,res) {
    res.render('find_sieuthi')
});

app.get('/admin',function(req,res) {
    res.render('admin')
})
app.get('/tuyen-dung',function(req,res){
    res.render('tuyendung');
});
app.get('/tuyen-dung-2',function(req,res){
    res.render('tuyendung2');
});
app.get('/cv1',function(req,res){
    res.render('cv1');
});
app.get('/cv2',function(req,res){
    res.render('cv2');
});
app.get('/cv3',function(req,res){
    res.render('cv3');
});
app.get('/cv4',function(req,res){
    res.render('cv4');
});
app.get('/cv5',function(req,res){
    res.render('cv5');
});
app.get('/cv6',function(req,res){
    res.render('cv6');
});
app.get('/cv7',function(req,res){
    res.render('cv7');
});
app.get('/cv8',function(req,res){
    res.render('cv8');
});
app.get('/cv9',function(req,res){
    res.render('cv9');
});
app.get('/cv10',function(req,res){
    res.render('cv10');
});
app.get('/chitietsp',function(req,res){
    res.render('chitiet_ngoc');
});

app.get('/loadbody', function(req,res) {
    var name = req.query.name;
    res.send(name)
});