//Sử dụng Switch....Case và mảng nhập vào số thứ tự ngày trong tuần và in ra thông báo ngày hôm đó  là thứ mấy (VD: nhập vào số 2, in ra thông báo "Tuesday")
function checkDay(){
    var dayOfWeek = parseInt(document.getElementById("dayOfWeek").value);
    var dayName;
    switch(dayOfWeek){
        case 1:
            dayName="Monday";
            break;
        case 2: 
            dayName="Tuesday";
            break;
        case 3: 
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5: 
            dayName="Friday";
            break;
        case 6: 
            dayName="Satuday";
            break;
        case 7: 
            dayName="Sunday";
            break;
        default:
            dayName="So khong hop le!!!"
    }
    alert("Hom nay la: " + dayName);
}