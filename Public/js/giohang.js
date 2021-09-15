
var giaotannha = document.querySelector('#giaotannha');
var densieuthi = document.querySelector('#nhantaisieuthi')

giaotannha.onchange = function() {
    densieuthi.checked=false;
}
densieuthi.onchange = function() {
    giaotannha.checked = false;
}