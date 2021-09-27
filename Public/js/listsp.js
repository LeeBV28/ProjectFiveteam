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
loadTk();

