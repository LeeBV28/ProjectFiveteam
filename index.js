//Khai báo và. Gọi module: express, mssql, body-parser, ejs
var express = require('express');
var mssql = require('mssql');
var bodyParser = require('body-parser');
const { render } = require('ejs');
const e = require('express');
const { text } = require('body-parser');

var app = express();
var port = process.env.PORT || 5500;

var config = {
    server: 'HOANG-JIN',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'lebv12345'
        }
    },
    database: 'data',
    options: { encrypt:false }
}

app.listen(port, function() {
    console.log(`Sever runing port: http://localhost:${port}`)
});
mssql.connect(config,function(err,rs) {
    if(err) console.log(err);
    else console.log('connecting database ....');
});

var sql = new mssql.Request; // đối tượng truy vấn data.
app.use(express.static('Public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// Kết thúc khai báo:



// Liên kết đến các trang
app.get('/',function(req,res) {
    res.render("home")
});
app.get('/chinh-sach-bao-hanh',function(req,res) {
    res.render("ngoc_s--chinh-sach-bao-hanh")
});
app.get('/chinh-sach-van-chuyen',function(req,res) {
    res.render("ngoc_s--chinh-sach-van-chuyen")
});
app.get('/s--hang-hoa',function(req,res) {
    res.render("ngoc_s--hang-hoa")
});
app.get('/mua-hang-tra-gop',function(req,res) {
    res.render("ngoc_s--mua-hang-tra-gop")
});
app.get('/list-sp',function(req,res) {    
    var name = req.query.Name;
    var sqlQuery = `select A.Tensp, A.Gia, A.Masp, B.Hinh1 as Image from SanPham A, HinhAnh B where A.LoaiSp like N'${name}' and A.Masp = B.SanPhamMasp;`
    sql.query(sqlQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {            
            res.render('listsp',{
                resul:rs.recordset,
                name: name
            });
        }
    });
});
app.get('/thong-tin-lien-he',function(req,res) {
    res.render('contact')
});
app.get('/san-pham-quan-tam',function(req, res) {
    res.render('quan_tam')
});
app.get('/admin',function(req,res) {
    res.render('admin')
});
app.get('/giohang', function(req,res) {
    var textQuery = 'select count(ID) as soluong from GioHang;';
    sql.query(textQuery, function(err, rs) {
        if(err){
            console.log(err);
        }
        if(rs.recordset[0].soluong == 0){
            res.render('giohang_trong');
        }
        else {           
            res.render('giohang')
        }
    })
});
app.get('/order-thanh-cong', function(req, res) {
    textQuery = `select A.TenKH, A.SoDt, A.DiaChi, A.GhiChu, A.SoLuong, B.Tensp, B.Gia  from DaDat A, SanPham B 
	    where B.Tensp in (select Tensp from SanPham where Masp in 
            (select SanPhamMaSP from DaDat)) and A.SanPhamMaSP = B.Masp;`
    sql.query(textQuery, function(err, rs) {  
        console.log(rs.recordset)   
        res.render('order-thanhcong', {
            hoadon: rs.recordset
        });
    })
});
app.get('/chi-tiet-sp', function(req, res) {
    var maSp = req.query.maspValue;
    var textQuery = `
        select * from SanPham where Masp like '${maSp}';
        select * from HinhAnh where SanPhamMasp like '${maSp}';
        select * from MoTa where SanPhamMasp like '${maSp}';
        select * from ThongSo where SanPhamMasp like '${maSp}';
        select A.HoTen, A.NoiDung, A.ID, B.HoTen as SbHoTen, B.NoiDung as SbNoiDung
            from BinhLuan A, SubBinhLuan B where A.SanPhamMasp like '${maSp}' and A.ID = B.BinhLuanId;
        select top(5) A.Masp, A.Tensp, A.Gia, B.Hinh1  as HinhAnh
            from SanPham A, HinhAnh B where LoaiSp like 
                (select LoaiSp from SanPham where Masp like '${maSp}') and a.Masp = B.SanPhamMasp;
    `;
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.render('le_chitietsp', {
                sanPham: rs.recordsets[0][0],
                image: rs.recordsets[1][0],
                moTa: rs.recordsets[2],
                thongSo: rs.recordsets[3],
                binhLuan: rs.recordsets[4],
                xemThem: rs.recordsets[5],
            });
            // res.send(rs.recordsets)
        }
    })
});
app.get('/load-navSpHot',function(req, res) {
    res.render('nav_sphot')
});
app.get('/tim-kiem', function(req, res) {
    var tensp = req.query.timkiem;
    var textQuery = `select A.Masp, A.LoaiSp, A.Tensp, A.Gia, B.Hinh1 as HinhAnh
    from SanPham A, HinhAnh B where A.Tensp like N'%${tensp}%' and A.Masp = B.SanPhamMasp;`;
        console.log(textQuery)
    sql.query(textQuery, function(err, rs) {
        if(err){
            res.send(err);
        }
        else {
            // res.send(rs.recordset)
            res.render('timkiem',{
                sanPham: rs.recordset
            });
            console.log(rs.recordset)
        }
    })
})
// end các liên kết mở trang


//Xử lý data cho trang home
app.get('/loaddatahome', function(req,res) {
    var sqlSanpham = req.query.key;
    sql.query(sqlSanpham, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(rs.recordset);
        }
    })
});
app.get('/load-spHot', function(req, res) {
    var textQuery = `select top(50) A.Masp, A.LoaiSp, A.Tensp, A.Gia, B.Hinh1 as HinhAnh
	    from SanPham A, HinhAnh B where A.TrangThai is null and A.Masp = B.SanPhamMasp;`;
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(rs.recordset);
        }
    })
});
app.get('/load-sales', function(req, res) {
    var textQuery = `select top(4) A.Masp, A.LoaiSp, A.Tensp, A.Gia, B.Hinh1 as HinhAnh
    from SanPham A, HinhAnh B where A.TrangThai like 'sales' and A.Masp = B.SanPhamMasp;`;
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(rs.recordset);
        }
    })
});
app.get('/load-tk', function(req, res) {
    var textQuery = `select top(12) A.Masp, A.LoaiSp, A.Tensp, A.Gia, B.Hinh1 as HinhAnh
        from SanPham A, HinhAnh B where A.TrangThai like 'tk' and A.Masp = B.SanPhamMasp;`;
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(rs.recordset);
        }
    })
});
// end xử lý data cho trang home

// Xử lý giỏ hàng với database
app.get('/data-cart', function(req, res) {
    var textQuery = 'select A.Tensp, A.Gia, A.Masp, A.ThuongHieu, B.Hinh1 as Image, C.SoLuong, C.ID from SanPham A, HinhAnh B, GioHang C where A.Masp in (select distinct SanPhamMaSP from GioHang)  and A.Masp = B.SanPhamMasp and A.Masp = C.SanPhamMaSP;'
    // var textQuery = req.query.notetext;
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(rs.recordset)
        }
    })
});
app.get('/add-cart', function(req, res) {
    var SanPhamMasp =  req.query.Masp;
    var textQuery = `insert into GioHang(SanPhamMaSP, SoLuong)Values('${SanPhamMasp}',1);`
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send('Có lỗi xảy ra. Vui lòng kiểm tra giỏ hàng');
        }
        else {
            res.send(`Đã thêm thành công sản phẩm ${SanPhamMasp} vào giỏ hàng`)
        }
    });
});
app.get('/update-data-cart', function(req, res) {
    var id = req.query.id;
    var number = req.query.number;
    var textQuery = `update GioHang set SoLuong = ${number} where ID = ${id};`
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send('Update done')
        }
    })
})
app.get('/delete-data-cart',function(req, res) {
    var keyDelete = req.query.key;
    var textQuery = `delete from GioHang where SanPhamMaSP like '${keyDelete}';`
    sql.query(textQuery, function (err, rs) {
        if(err){
            res.send(err);
        }
        else {
            res.send('thanh cong')
        }
    })
})
app.get('/order', function(req, res) {
    var textQuery = req.query.key;
    console.log(textQuery)
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send('Có lỗi sảy ra. Chúng tôi sẽ sớm khắc phục')
        }
        else {
            res.send('Chúng tôi đã ghi nhận đơn hàng của bạn.')
        }
    });
});
// done xử lý giỏ hàng với database

// Xử lý sản phẩm quan tâm
app.get('/load-sp-quantam', function(req, res) {
    textQuery = 'select A.Tensp, A.Gia, A.ThuongHieu, A.Masp, B.Hinh1 as Image from SanPham A, HinhAnh B where A.Masp in (select SanPhamMaSP from LikeSP) and A.Masp = B.SanPhamMasp;';
    sql.query(textQuery, function(err,rs) {
        if(err){
            res.send(err);
        }
        else {
            res.send(rs.recordset);
        }
    })
})
app.get('/add-like', function(req, res) {
    var SanPhamMaSP = req.query.Masp;
    var textQuery = `insert into LikeSP(SanPhamMaSP)values('${SanPhamMaSP}');`
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send('Lỗi! Có thể sản phẩm này đã ở trong giỏ ưu thích của bạn rồi');
        }
        else {
            res.send('Bạn vừa quan tâm thêm 1 sản phẩm. ');
        }
    });
});
app.get('/delete-sp-quantam', function(req,res) {
    var masp = req.query.Masp;
    var textQuery = `delete from LikeSP where SanPhamMaSP like'${masp}%'`;
    sql.query(textQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {
            res.send('Xoa thanh cong')
        }
    })
});

app.get('/test-data', function(req,res) {
    var name = req.query.Name || '';
    var sqlQuery = `select * from SanPham;`
    sql.query(sqlQuery, function(err, rs) {
        if(err) {
            res.send(err);
        }
        else {            
            res.send(rs.recordsets)
        }
    });
});