var express = require('express');
var app = express();

var bodyParser=require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(__dirname + '/Public'));

app.get('/',function(req,res){
    res.render('home');
});
app.get('/tuyendung',function(req,res){
    res.render('tuyendung');
});
app.get('/tuyendung2',function(req,res){
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
app.listen(5000,function(){
    console.log('Sever is running...');
});