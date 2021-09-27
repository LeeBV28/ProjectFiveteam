function loadSpHot(key = 1) {
    var domSpHot = document.querySelector('.sanphamhot_conten .row');
    $.ajax({
        url: '/load-spHot',
        method: 'GET',
        success: function(rs) {     
            var htmlsSpHot = '';
            for (var i = (key-1)*16; i < 16*key; i++){
                var html = `
                    <div class="show">
                        <a href="/chi-tiet-sp?maspValue=${rs[i].Masp}">
                            <img src="${rs[i].HinhAnh}" alt="">
                        </a>
                        <a href="/chi-tiet-sp?maspValue=${rs[i].Masp}">
                            <p>${rs[i].Tensp}</p>
                        </a>
                        <h4>${rs[i].Gia}đ</h4>
                        <div class="show_hidden">
                            <div class="add-cart" data-key="${rs[i].Masp}">
                                <i class='bx bxs-cart'>
                                    <p class="add_cart hover_flex">
                                        Thêm vào giỏ hàng
                                    </p>
                                </i>
                            </div>
                            <div class="add-like" data-key="${rs[i].Masp}">
                                <i class='bx bxs-add-to-queue'>
                                    <p class="add_like hover_flex">
                                        Thêm vào mục ưu thích
                                    </p>
                                </i>
                            </div>
                        </div>
                        <div class="button_show">
                            <a href="/list-sp?Name=${rs[i].LoaiSp}">
                                Xem thêm sản phẩm tương tự
                            </a>
                        </div>
                    </div>
                `
                htmlsSpHot += html;
            }
            domSpHot.innerHTML = htmlsSpHot;            
            var cartElement = document.querySelectorAll('.add-cart');
            addCart(cartElement); 

            var likeElement = document.querySelectorAll('.add-like');
            addLike(likeElement);
        }
    });
};

function handleClickNav() {
    var btnNav = document.querySelectorAll('.tab-chuyentrang .tab-item');
    function deleteActie() {
        for (var j = 0; j < btnNav.length; j++) {
            if(btnNav[j].classList.contains('active')) {
                btnNav[j].classList.remove('active');
            }
        }
        document.querySelector('.sanphamhot').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    btnNav.forEach(function(data) {
        data.onclick = function(e) {
            var numbur = parseInt(e.target.innerText);
            if(this.classList.contains('active')){

            }
            if(this.classList.contains('chevron')) {
                var itemPageActive = document.querySelector('.tab-chuyentrang .tab-item.page.active');
                var itemPage = document.querySelectorAll('.tab-chuyentrang .tab-item.page');
                // console.log(itemPageActive.innerText)
                if(this.classList.contains('left')) {
                    if(parseInt(itemPageActive.innerText) == 1) {
                    }
                    else {
                        loadSpHot(parseInt(itemPageActive.innerText)-1);
                        deleteActie();
                        itemPage[parseInt(itemPageActive.innerText)-2].classList.add('active');
                    }
                }
                if(this.classList.contains('right')) {
                    if(parseInt(itemPageActive.innerText) == 3) {

                    }
                    else {
                        loadSpHot(parseInt(itemPageActive.innerText)+1);
                        deleteActie();
                        itemPage[parseInt(itemPageActive.innerText)].classList.add('active');
                    }
                }
            }
            else {
                loadSpHot(numbur);
                deleteActie();
                e.target.classList.add('active');                
            }
        }
    })
}

function loadTk() {
    $.ajax({
        url: '/load-tk',
        method: 'GET',
        success: function(rs) {
            var showHtmls = '';
            var carouselElement = document.querySelectorAll('.carousel-item .slider')
            for(var i = 0; i < rs.length; i++) {
                var tkHtml = `
                    <div class="show">
                        <a href="/chi-tiet-sp?maspValue=${rs[i].Masp}">
                            <img src="${rs[i].HinhAnh}" alt="">
                        </a>
                        <a href="/chi-tiet-sp?maspValue=${rs[i].Masp}">
                            <p>${rs[i].Tensp}</p>
                        </a>
                        <h4>${rs[i].Gia}đ</h4>
                        <div class="show_hidden">
                            <div class="add-cart" data-key="${rs[i].Masp}">
                                <i class='bx bxs-cart'>
                                    <p class="add_cart hover_flex">
                                        Thêm vào giỏ hàng
                                    </p>
                                </i>
                            </div>
                            <div class="add-like" data-key="${rs[i].Masp}">
                                <i class='bx bxs-add-to-queue'>
                                    <p class="add_like hover_flex">
                                        Thêm vào mục ưu thích
                                    </p>
                                </i>
                            </div>
                        </div>
                        <div class="button_show">
                            <a href="/list-sp?Name=${rs[i].LoaiSp}">
                                Xem thêm sản phẩm tương tự
                            </a>
                        </div>
                    </div>
                `
                showHtmls += tkHtml;
                if(i == 3) {
                    carouselElement[0].innerHTML = showHtmls;
                    showHtmls = '';
                }
                if(i == 7) {
                    carouselElement[1].innerHTML = showHtmls;
                    showHtmls = '';
                }
                if(i == 11) {
                    carouselElement[2].innerHTML = showHtmls;
                    showHtmls = '';
                }                
            }
            var cartElement = document.querySelectorAll('.add-cart');
            addCart(cartElement);
            var likeElement = document.querySelectorAll('.add-like');
            addLike(likeElement);
        }
    });
}

loadSpHot();
handleClickNav();
loadTk();