// var $ = document.querySelector.bind(document);
// Handle click more user
document.querySelector('.more_user').onclick = function() {
    document.querySelector('.more_menu').classList.toggle('active')
}

// handle click nav left
function deleteActiveNavLeft(){
    var sliderChild = document.querySelectorAll('.slider-child');
    for(var i = 0; i < sliderChild.length; i++) {
        if(sliderChild[i].closest('.active')){
            sliderChild[i].classList.remove('active')
        }
    }

    var body = document.querySelectorAll('.body');
    for(var j = 0; j < body.length; j++){
        if(body[j].closest('.active')) {
            body[j].classList.remove('active')
        }
    }
}

function addactive() {
    var activeDefault = document.querySelectorAll('.active-default');
    for(var i = 0; i < activeDefault.length; i++) {
        if(activeDefault[i].closest(':not(.active)')) {
            activeDefault[i].classList.add('active')
        }
    }
}

var sliderLeft = document.querySelector('.slider_left');
sliderLeft.onclick = function(e) {
    var home = e.target.closest('.home:not(.active)');
    var store = e.target.closest('.store:not(.active)');
    var order = e.target.closest('.order:not(.active)');
    var interface = e.target.closest('.interface:not(.active)');
    var recruitment = e.target.closest('.recruitment:not(.active)');
    if(home){
        deleteActive();
        addactive();
        deleteActiveNavLeft();
        home.classList.add('active');
        document.querySelector('.add-body .home').classList.add('active');
    }
    if(store){   
        deleteActive();   
        addactive();
        deleteActiveNavLeft();
        store.classList.add('active');
        document.querySelector('.add-body .khoHang_sanPham').classList.add('active');
    }
    if(order){  
        deleteActive();
        addactive();
        deleteActiveNavLeft();
        order.classList.add('active');
        document.querySelector('.add-body .order').classList.add('active');
    }
    if(interface){
        deleteActive();
        addactive();
        deleteActiveNavLeft();
        interface.classList.add('active');
        document.querySelector('.add-body .edit-home-page').classList.add('active');
    }
    if(recruitment){
        deleteActive();
        addactive();
        deleteActiveNavLeft();
        recruitment.classList.add('active');
        document.querySelector('.add-body .quan-ly-tuyen-dung').classList.add('active');
    }
}

// handle clink nav header body dashboard
function deleteActive(){     
    var navLink = document.querySelectorAll('.nav-link');
    for(var i = 0; i < navLink.length; i++) {
        if(navLink[i].closest('.active')) {
            navLink[i].classList.remove('active')
        }
    }

    var bodyDashboard = document.querySelectorAll('.dashboard-body');
    for(var j = 0; j < bodyDashboard.length;j++) {
        if(bodyDashboard[j].closest('.active')) {
            bodyDashboard[j].classList.remove('active');
        }
    }
    
    var orderBody = document.querySelectorAll('.order-body');
    // console.log(orderBody)
}

var navTab = document.querySelector('.khoHang_sanPham .nav-tabs');
navTab.onclick = function(e) {
    var navNhapkho = e.target.closest('.nhapkho:not(.active)');
    var navXuatkho = e.target.closest('.xuatkho:not(.active)');
    var navQlkho = e.target.closest('.qlkho:not(.active)');
    if(navNhapkho) {
        deleteActive();
        navNhapkho.classList.add('active');
        document.querySelector('.dashboard-body.nhapkho').classList.add('active');
    }
    if(navXuatkho) {
        deleteActive();
        navXuatkho.classList.add('active')
        document.querySelector('.dashboard-body.xuatkho').classList.add('active');
    }
    if(navQlkho) {
        deleteActive();
        navQlkho.classList.add('active')
        document.querySelector('.dashboard-body.qlkho').classList.add('active');
    }
}

var orderNavTab = document.querySelector('.order .nav-tabs');
orderNavTab.onclick = function(e) {
    var choGuiHang = e.target.closest('.choguihang:not(.active');
    var choDatHang = e.target.closest('.chodathang:not(.active');
    var themDon = e.target.closest('.themdon:not(.active)');
    if(choGuiHang) {
        deleteActive();
        choGuiHang.classList.add('active');
        document.querySelector('.dashboard-body.ship').classList.add('active')
    }
    if(choDatHang) {
        deleteActive();
        choDatHang.classList.add('active');
        document.querySelector('.dashboard-body.chodathang').classList.add('active');
    }
    if(themDon) {
        deleteActive();
        themDon.classList.add('active');
        document.querySelector('.dashboard-body.themdonhang').classList.add('active');
    }

}

var editHomePage = document.querySelector('.edit-home-page .nav-tabs');
editHomePage.onclick = function(e) {
    var saleSapSan = e.target.closest('.sale-sap-san:not(.active)');
    var spTimKiemNhieu = e.target.closest('.sp-timkiem-nhieu:not(.active)');
    var spDangHot = e.target.closest('.sp-dang-hot:not(avtive)');
    var posterQc = e.target.closest('.poster-qc:not(.active)')
    if(saleSapSan) {
        deleteActive();
        saleSapSan.classList.add('active');
        document.querySelector('.dashboard-body.sale').classList.add('active');
    }
    if(spTimKiemNhieu) {
        deleteActive();
        spTimKiemNhieu.classList.add('active');
        document.querySelector('.dashboard-body.search').classList.add('active');
    }
    if(spDangHot) {
        deleteActive();
        spDangHot.classList.add('active');
        document.querySelector('.dashboard-body.sp-hot').classList.add('active');
    }
    if(posterQc) {
        deleteActive();
        posterQc.classList.add('active');
        document.querySelector('.dashboard-body.poster-qc').classList.add('active');
    }
}

var quanLyTuyenDung = document.querySelector('.quan-ly-tuyen-dung .nav-tabs');
quanLyTuyenDung.onclick = function(e) {
    var dangTuyen = e.target.closest('.dang-tuyen:not(.active)');
    var ThemTuyenDung = e.target.closest('.them-tuyen-dung:not(.active)');
    if(dangTuyen) {
        deleteActive();
        dangTuyen.classList.add('active');
        document.querySelector('.dashboard-body.dang-tuyen').classList.add('active');
    }
    if(ThemTuyenDung) {
        deleteActive();
        ThemTuyenDung.classList.add('active');
        document.querySelector('.dashboard-body.them-tuyen-dung').classList.add('active');
    }
}

