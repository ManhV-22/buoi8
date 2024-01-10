//Viết chương trình nhập số dòng, số cột, in ra bảng biểu có số dòng và số cột đã nhập.
function taoBang(){
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);
    var table = "<table border='1'>";
    for(var i=1; i <= rows; i++){
        table += "<tr>";
        for(var j=1; j <= columns; j++){
            table += "<td>" + "A" + i + "." + j + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("result").innerHTML = table;
}