function clickSubImg() {
    var imgElement = document.querySelector('.image img');
    console.log
    var subImg = document.querySelectorAll('.sub-image img');
    subImg.forEach(function(rs) {
        rs.onclick = function() {
            var srcClick = this.getAttribute('src');
            imgElement.src = srcClick;
            for(var i = 0; i < subImg.length; i++){
                subImg[i].classList.remove('active');
            }
            this.classList.add('active')         
        }
    })
}
clickSubImg();

function checkGiaKm() {
    var GiaKm = parseInt(document.querySelector('.gia span').innerText);
    document.querySelector('.gia-km span').innerText = GiaKm - 100000;
}
checkGiaKm();

function noneImg() {
    var imgElement = document.querySelectorAll('img');
    for (var i = 0; i < imgElement.length; i++) {
        if(imgElement[i].getAttribute('src')){

        }
        else {
            imgElement[i].style.display = 'none';
        }
    }
}
noneImg();

document.querySelector('.btn_xem-them button').onclick = function btnMota() {
    var btnHtml = {
        up: `
            <i class="fas fa-angle-double-up"></i>
            Thu Gọn 
            <i class="fas fa-angle-double-up"></i>
        `,
        down: `
            <i class="fas fa-angle-double-down"></i>
            Xem Thêm
            <i class="fas fa-angle-double-down"></i>    
        `,
    }
    var noiDungElemnt = document.querySelector('.noi-dung');
    if(this.classList.length > 2){
        this.classList.remove('dow');
        this.innerHTML = btnHtml.up;
        noiDungElemnt.classList.remove('overhiden');
    }
    else {
        this.classList.add('dow');
        this.innerHTML = btnHtml.down;
        noiDungElemnt.classList.add('overhiden');
    }
}

var addCart = document.querySelectorAll('.add-cart');
addCart.forEach(function(data) {
    data.onclick = function() {
        var dataKey = this.getAttribute('data-key');
        $.ajax({
            url: '/add-cart',
            method: 'GET',
            data: {
                Masp: dataKey,
            },
            success: function(rs) {
                alert(rs)
            }
        });
    }
});

var addLike = document.querySelectorAll('.add-like');
addLike.forEach(function(data) {
    data.onclick = function() {
        var dataKey = this.getAttribute('data-key');
        $.ajax({
            url: '/add-like',
            method: 'GET',
            data: {
                Masp: dataKey,
            },
            success: function(rs) {
                alert(rs)
            }
        });
    }
});

document.querySelector('button[name="order"]').onclick = function(){
    var dataKey = this.getAttribute('data-key');
    $.ajax({
        url: '/add-cart',
        method: 'GET',
        data: {
            Masp: dataKey,
        },
        success: function(re) {
            window.location.replace('/giohang')
        }
    });
}

