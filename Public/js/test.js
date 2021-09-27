function load() {
    $.ajax({
        url: '/list-sp',
        method: 'GET',
        success: function(rs) {
            console.log(rs)
        }
    });
}

load()