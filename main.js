//1
function checkAge(){
    var tuoi = 24;
    if(tuoi > 18){
       console.log("Người lớn");
    }
    else console.log ("Vị thành niên");
}

checkAge();

//2
function checkEvenOdd(){
    var so = 13;
    if(so % 2 == 0){
        console.log("Số chẵn");
    }
    else console.log("Số lẻ");
}

checkEvenOdd();

//3
function compareNumbers(){
    var a = 8;
    var b = 10;
    if(a>b){
        console.log("a lớn hơn b");
    } else if(a<b){
        console.log("a nhỏ hơn b");
    } else console.log("a bằng b");
} 
compareNumbers();

//4
function checkInteger(){
    var so = 4.3;
    if(so % 1 === 0){
        console.log("Số nguyên");
    } 
    else console.log("Không phải số nguyên");
}
checkInteger();

//5
function converNumberToMonth(){
    var so = 4;
    if ( so >=1 && so <= 12){
        console.log("Tháng " + so);
    }
    else console.log("Tháng không hợp lệ");
}
converNumberToMonth();

//6
function calculateShipping(){
    var soKm = 15;
    if (soKm <=5){
        console.log("7000");
    } 
    else{
        let soKmtieptheo = soKm - 5;
        let phitieptheo = soKmtieptheo * 2000;
        tongphivanchuyen = 7000 + phitieptheo;
    } console.log(tongphivanchuyen + " đồng");
}
calculateShipping();

//7
function gradeExam(){
    var diemthi = 99;
    if (diemthi >= 90){
        console.log("Xuất sắc");
    } 
    else if (diemthi >= 80){
        console.log("Giỏi");
    }
    else if (diemthi >= 70){
        console.log("Khá");
    }
    else if (diemthi >= 60){
        console.log("Trung bình");
    }
    else{
        console.log("Yếu");
    }
}
gradeExam();