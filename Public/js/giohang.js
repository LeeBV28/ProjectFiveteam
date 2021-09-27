function loadGioHang() {
    var productElement = document.querySelector('.product-class');
    $.ajax({
        url: '/data-cart',
        method: 'GET',
        success: function(rs) {
            var htmls = '';
            for(var i = 0; i < rs.length; i++) {
                var html = `
                    <div class="sanpham" masp="${rs[i].Masp}" sl-giohang="${rs[i].SoLuong}">
                        <div class="left">
                            <div class="anh">
                                <img src="${rs[i].Image}">
                                <p class="xoa" value="${rs[i].Masp}">
                                    <i class="fas fa-times-circle"></i>
                                    Xoá
                                </p>
                            </div>
                            <div class="ten">
                                <h1>${rs[i].Tensp}</h1>
                                <p>Thương hiệu: ${rs[i].ThuongHieu} </p>
                            </div>
                        </div>
                        <div class="right">
                            <div class="gia" value="${rs[i].Gia}">
                                <p>${rs[i].Gia}đ</p>
                            </div>
                            <div class="soluong" value="${rs[i].ID}">
                                <p class="tru nut">
                                    <i></i>
                                </p>
                                <p class="number">${rs[i].SoLuong}</p>
                                <p class="cong nut">
                                    <i class="fas fa-plus"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                `
                htmls += html;
            }
            productElement.innerHTML = htmls;
            checksoluong();
            checkGia();
            handleDelete();
        }
    });
}
loadGioHang();


function handleDelete() {
    var btnDelete = document.querySelectorAll('.xoa');
    btnDelete.forEach(function(data) {
        data.onclick = function(){
            var valueDelete = data.getAttribute('value');
            $.ajax({
                url: '/delete-data-cart',
                method: 'GET',
                data: { 
                    key: valueDelete,
                },
                success: function(rs) {
                    window.location.replace("/giohang");
                }
            });
        }
    })
}


var giaotannha = document.querySelector('#giaotannha');
var densieuthi = document.querySelector('#nhantaisieuthi')

giaotannha.onchange = function() {
    densieuthi.checked=false;
}
densieuthi.onchange = function() {
    giaotannha.checked = false;
}

function checksoluong() { // check nếu số lượng nhiều hơn 1 sẽ giảm được số lượng sản phẩm. nếu bằng 1 không giảm được.
    var soluong = document.querySelectorAll('.soluong');
    var sumNumber = 0;
    for(var i = 0; i<soluong.length; i++) {
        var numberElement = soluong[i].children[1]
        var tru = soluong[i].children[0]
        var number = parseInt(numberElement.innerText);
        sumNumber += number;
        if (number == 1) {
            tru.classList.add('active')
            tru.children[0].style.backgroundColor = 'gray';
        }
        else {
            tru.classList.remove('active')
            tru.children[0].style.backgroundColor = 'blue';
        }
    }
    document.querySelector('.tamtinh span').innerText = sumNumber;
}

function checkGia() {
    var giaElement = document.querySelectorAll('.right .gia');
    var soLuong = document.querySelectorAll('.soluong .number');
    var sumGiaElement = document.querySelectorAll('.sum-tien span');
    var sumGia = 0;
    // console.log(soluong)
    for(var i = 0; i < giaElement.length; i++) {
        var gia = giaElement[i].getAttribute('value');
        sumGia += gia * soLuong[i].innerText;
    }
    for(var j = 0; j < sumGiaElement.length; j++) {
        sumGiaElement[j].innerText = `${sumGia}đ`;
    }

}

function updateSoLuong(number, ID) {
    $.ajax({
        url: '/update-data-cart',
        method: 'GET',
        data: {
            id: ID,
            number: number,
        },
        success: function(rs) {
            
        }
    });
}

// xử lý khi tăng giảm số lương đơn trong giỏ hàng
document.querySelector('.product-class').onclick = function(e) {
    var soluongElement = e.target.closest('.soluong')
    var id = (soluongElement.getAttribute('value'))

    if(soluongElement) {
        var btnTru = e.target.closest('.tru:not(.active)');
        var btnCong = e.target.closest('.cong');
        var numberElement = e.target.closest('.number')
        
        var getNumber = soluongElement.children[1];

        var number = parseInt(getNumber.innerText);
            
        if(btnTru) {
            number -= 1;
            getNumber.innerText = number;
            updateSoLuong(number, id);
            loadGioHang();
            checksoluong();
            checkGia();            
        }
        if (btnCong) {
            number += 1;
            getNumber.innerText = number;            
            updateSoLuong(number, id);
            loadGioHang();
            checksoluong();
            checkGia();
        }
    }      
}

// Xử lý khi click đặt hàng
document.querySelector('.nut-mua-hang button').onclick = function dathang(){
    var sanphamElement = document.querySelectorAll('.sanpham');
    var tenKh = document.querySelector('input[name="name"]').value;
    var sdt = document.querySelector('input[name="phone"]').value;
    var tinh = document.querySelector('input[name="tinh"]').value;
    var quan = document.querySelector('input[name="quan"]').value;
    var phuong = document.querySelector('input[name="phuong"]').value;
    var soNha = document.querySelector('input[name="soNha"]').value;
    var ghichu = document.querySelector('input[name="ghichu"]').value;

    if (giaotannha.checked) {
        if (tenKh && sdt && tinh && quan && phuong && soNha) {
            for(var i = 0; i < sanphamElement.length; i++) {
                var masp = sanphamElement[i].getAttribute('masp').trimEnd();
                var soluongvalue = sanphamElement[i].getAttribute('sl-giohang');
                var dataKey = `insert into DaDat(TenKH, SoDt, DiaChi, SanPhamMaSP, SoLuong, GhiChu)
                    values(N'${tenKh}',${sdt},N'${soNha},${phuong},${quan},${tinh}','${masp}',${soluongvalue},N'${ghichu}');
                    delete from GioHang where SanPhamMaSP like '${masp}';
                `
                $.ajax({
                    url: '/order',
                    method: 'GET',
                    data: {
                        key: dataKey
                    },
                    success: function(rs) {
                        window.location.replace("/order-thanh-cong");
                    }
                });
            }            
        }
        else {
            alert('Vui lòng điền đẩy đủ thông tin')
        }
    }
    if(densieuthi.checked) {
        if (tenKh && sdt) {
            for(var i = 0; i < sanphamElement.length; i++) {
                var masp = sanphamElement[i].getAttribute('masp');
                var soluongvalue = sanphamElement[i].getAttribute('sl-giohang');
                var dataKey = `insert into DaDat(TenKH, SoDt,SanPhamMaSP, SoLuong, GhiChu)
                    values(N'${tenKh}',${sdt},'${masp}',${soluongvalue},N'${ghichu}');
                    delete from GioHang where SanPhamMaSP like '${masp}';
                `
                $.ajax({
                    url: '/order',
                    method: 'GET',
                    data: {
                        key: dataKey
                    },
                    success: function(rs) {
                        window.location.replace("/order-thanh-cong");
                    }
                });
            }
        }
        else {
            alert('Vui lòng điền họ tên và SĐT. Chúng tôi sẽ gọi nếu bạn chưa đến lấy hàng khi sản phẩm sắp hết hàng')
        }
    } 
}
