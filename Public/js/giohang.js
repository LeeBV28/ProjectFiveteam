
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
    var gia = 20000000;
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
    gia = gia * sumNumber;
    document.querySelector('.tamtinh span').innerText = sumNumber;
    document.querySelector('.sum .gia').innerText = `${gia}đ`;
    document.querySelector('.sum-tien span').innerText = `${gia}đ`;
}
checksoluong()

document.querySelector('.product-class').onclick = function(e) {
    var soluongElement = e.target.closest('.soluong')
    if(soluongElement) {
        var btnTru = e.target.closest('.tru:not(.active)');
        var btnCong = e.target.closest('.cong');
        var numberElement = e.target.closest('.number')
        
        var getNumber = soluongElement.children[1];

        var number = parseInt(getNumber.innerText);
            
        if(btnTru) {
            number -= 1;
            getNumber.innerText = number;
            checksoluong();
        }
        if (btnCong) {
            number += 1;
            getNumber.innerText = number;
            checksoluong();
        }
    }      
}