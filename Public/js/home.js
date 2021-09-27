var textQuery = 'select distinct top(9) LoaiSp from SanPham;';
function loadSp() {
    var listsProduct = document.querySelector('.js__list-product');
    $.ajax({
        url: '/loaddatahome',
        method: 'GET',
        data: {
            key: textQuery
        },
        success: function(rs) {
            var productContentHTMLs='';
            for (var i = 0 ; i < rs.length ; i ++) {
                var productContentHTML =
                            `<li class="product-content">
                                <div class="product-content__link">
                                        <a href="/list-sp?Name=${rs[i].LoaiSp}">
                                            <i class="far fa-hand-point-right"></i>
                                            <span style="font-style: normal"> ${rs[i].LoaiSp}</span>
                                        </a>
                                    </div>
                            </li>`
                productContentHTMLs += productContentHTML;
            }
            listsProduct.innerHTML = productContentHTMLs;  
            var addView = document.querySelector('.add-view');      
            handleAddView(addView);
            loadLabelCart();
            loadLabelLike();
        }
    });
}
loadSp();

function handleAddView(element) {
        element.onclick = function() {
        if(this.classList.contains('hiden')){
            textQuery = 'select distinct top(9) LoaiSp from SanPham;'
            loadSp();
            element.classList.remove('hiden');
            document.querySelector('.list-product-detail').style.width = '100%';
        }
        else { 
            textQuery =  'select distinct LoaiSp from SanPham;';
            loadSp();        
            element.classList.add('hiden');
            document.querySelector('.list-product-detail').style.width = '380%';
        } 
    }
}



function addCart(cartElement) {
    cartElement.forEach(function(data) {
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
                    loadLabelCart();
                    loadLabelLike();
                }
            });
        }
    });
}

function addLike(likeElement) {
    likeElement.forEach(function(data) {
        data.onclick = function() {
            var dataKey = this.getAttribute('data-key');
            $.ajax({
                url: '/add-like',
                method: 'GET',
                data: {
                    Masp: dataKey,
                },
                success: function(rs) {
                    alert(rs);
                    loadLabelCart();
                    loadLabelLike();
                }
            });
        }
    });
}

function loadLabelCart() {
    $.ajax({
        url: '/data-cart',
        method: 'GET',
        success: function(rs) {
            document.querySelector('.header__cart i.cart span').innerText = rs.length;
        }
    });
}

function loadLabelLike() {
    $.ajax({
        url: '/load-sp-quantam',
        method: 'GET',
        success: function(rs) {
            document.querySelector('.header__cart i.like span').innerText = rs.length;
        }
    });
}


