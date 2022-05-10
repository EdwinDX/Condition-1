let year = parseInt(prompt("Nhập năm cần kiểm tra"));
let isLeapyear = false;
let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapyear = true;
        }
    }
    else {
        isLeapyear = true;
    }
}
if (isLeapyear) {
    alert(year + ' là năm nhuận');
}
else {
    alert(year + ' không phải năm nhuận');
}