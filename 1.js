//Viết chương trình nhập n, in ra trên trình duyệt bảng cửu chương thứ n.
function bangnhan(){
    const number = document.getElementById('n').value;
    var table = '<h2> Bang cuu chuong cua' + number + ' </h2>';
    for( var i=1; i <= 10; i++){
        table += number + 'x' + i + '=' + (number*i) + '<br>'; 
    }
    document.getElementById('tableOutput').innerHTML = table;
}