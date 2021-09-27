function loadSales() {
    $.ajax ({
        url: '/load-sales',
        method: 'GET',
        success: function(rs) {
            var saleHtmls = '';
            for(var i = 0; i < rs.length; i++) {
                var saleHtml = `
                    <li class="aside__sale-item">
                        <a href="/chi-tiet-sp?maspValue=${rs[i].Masp}" class="aside__sale-item-link">
                            <img src="${rs[i].HinhAnh}" alt="" class="aside__sale-item-img">
                            <div class="aside__sale-item-content">
                                <span class="aside__sale-item-description">${rs[i].Tensp}</span>
                                <span class="aside__sale-item-count">${rs[i].Gia}đ</span>
                            </div>
                        </a>
                    </li>
                `
                saleHtmls += saleHtml;
                document.querySelector('.aside__sale-list').innerHTML = saleHtmls;
            }
        }
    });
}
loadSales();