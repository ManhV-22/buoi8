//Viết chương trình nhập n, in ra  in ra trên trình duyệt n bảng cửu chương.
function bangCuuChuong(){
    const number = document.getElementById('n').value;
    var table = '';
    for( var i=1; i <= number; i++){
        table += '<h2>Bang cuu chuong '+i+'</h2>';
        for(var j=1; j <= 10; j++){
            table += i +'x'+ j +'='+ (i*j) + '<br>';
        }
    }
    document.getElementById('tableOutput').innerHTML = table;
}