function loadData() {
    var productElement = document.querySelector('.product-class');
    var sumSpElement = document.querySelector('.sum-tien');
    $.ajax({
        url: '/load-sp-quantam',
        method: 'GET',
        success: function(rs) {
            var htmls ='';
            for(var i =0; i< rs.length; i++) {
                var html = `                
                    <div class="sanpham" masp="${rs[i].Masp}">
                        <div class="left">
                            <div class="anh">
                                <img src="${rs[i].Image}">
                                <p class="xoa" masp="${rs[i].Masp}">
                                    <i class="fas fa-times-circle"></i>
                                    Xoá
                                </p>
                            </div>
                            <div class="ten">
                                <h1>
                                    <a href="/chi-tiet-sp?masp=${rs[i].Masp}">
                                        ${rs[i].Tensp}
                                    </a>
                                </h1>
                                <p>Thương hiệu: ${rs[i].ThuongHieu}</p>
                            </div>
                        </div>
                        <div class="right">
                            <div class="gia">
                                <p>${rs[i].Gia}đ</p>
                            </div>
                            <div class="option" masp="${rs[i].Masp}">
                                <div>
                                    <i class="fas fa-cart-plus"></i>
                                    Mua Hàng
                                </div>
                            </div>
                        </div>
                    </div>
                `
                htmls += html;
            }
            productElement.innerHTML = htmls;
            sumSpElement.innerHTML = `<p>Tổng ${rs.length} Sản phẩm</p>`;
            var xoaElement = document.querySelectorAll('.xoa');
            var optionElemet = document.querySelectorAll('.option');
            handleBtnXoa(xoaElement);
            handleBtnMuaHang(optionElemet);
        }        
    });
}
loadData();

function handleBtnXoa(element) {
    element.forEach(function(data) {
        data.onclick = function() {
            var masp = this.getAttribute('masp');
             $.ajax({
                url: '/delete-sp-quantam',
                method: 'GET',
                data: {
                    Masp: masp
                },
                success: function(rs){
                    loadData();
                    loadLabelLike();
                }
            });
        }
    })
    
}

function handleBtnMuaHang(element) {
    element.forEach(function(data) {
        data.onclick = function() {
            var masp = this.getAttribute('masp');
            $.ajax({
                url: '/add-cart',
                method: 'GET',
                data: {
                    Masp: masp,
                },
                success: function(rs){

                }
            });
            $.ajax({
                url: '/delete-sp-quantam',
                method: 'GET',
                data: {
                    Masp: masp
                },
                success: function(rs){
                    loadData();
                }
            });
        }
    })
}

document.querySelector('button[name="muahet"]').onclick = function handleBtnMuaHet(){
    var spElement = document.querySelectorAll('.sanpham');
    if(spElement.length == 0) {
        alert('Không có sản phẩm quan tâm')
    }
    else {
        for(var i = 0; i < spElement.length; i++) {
            var spValue = spElement[i].getAttribute('masp');
            $.ajax({
                url: '/add-cart',
                method: 'GET',
                data: {
                    Masp: spValue,
                },
                success: function(rs){
    
                }
            });
            $.ajax({
                url: '/delete-sp-quantam',
                method: 'GET',
                data: {
                    Masp: spValue,
                },
                success: function(rs){
                    loadData();
                }
            });
        }        
        window.location.replace('/giohang');
    }
    
    
}

