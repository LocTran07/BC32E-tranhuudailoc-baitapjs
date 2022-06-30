//input
var arr = [];
document.getElementById('btnthemso').onclick = function () {
    var soNhap = +document.getElementById('nhapso').value;
    arr.push(soNhap);
    document.getElementById('mang').innerHTML = arr
}
console.log(arr)

//bài 1 
document.getElementById('btn1').onclick = function () {
    //output
    ketQua = 0;
    //progress
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            ketQua += arr[index];
        }

    }
    document.getElementById('inketqua1').innerHTML = 'tổng: ' + ketQua
}

//bài 2 
document.getElementById('btn2').onclick = function () {
    // output
    var dem = 0
    // progress 
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            dem++
        }
    }
    document.getElementById('inketqua2').innerHTML = 'số dương: ' + dem
}

// bài 3
document.getElementById('btn3').onclick = function () {
    arr.sort(function (a, b) {
        return a - b
    })
    document.getElementById('inketqua3').innerHTML = 'số nhỏ nhất: ' + arr[0]
}

//bài 4

document.getElementById('btn4').onclick = function () {
    //output
    var newArr = [];
    //progress
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            newArr.push(arr[index])
        }
    }
    newArr.sort(function (a, b) {
        return (a - b)
    })
    document.getElementById('inketqua4').innerHTML = newArr[0]
}

//bài 5
document.getElementById('btn5').onclick = function () {
    //output

    var ketQua = -1;
    for (var index = arr.length - 1; index >= 0; index--) {
        if (arr[index] % 2 === 0) {
            ketQua = 'số chẵn cuối cùng là: ' + arr[index]
        } else {
            ketQua
        }
    }
    document.getElementById('inketqua5').innerHTML = ketQua
}

//bài 6{
document.getElementById('btn6').onclick = function () {
    //output
    var newArr = []
    //progress 
    var viTri1 = +document.getElementById('vitri1').value;
    var viTri2 = +document.getElementById('vitri2').value;
    var viTri1moi = arr[viTri1];
    // var viTri2moi = arr[viTri2]
    // arr[viTri2] = viTri1moi;
    // arr[viTri1] = viTri2moi
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = viTri1moi


    document.getElementById('inketqua6').innerHTML = arr
}

//bài 7
document.getElementById('btn7').onclick = function () {
    arr.sort(function (a, b) {
        return (a - b)
    })
    document.getElementById('inketqua7').innerHTML = arr
}
//bài 8
document.getElementById('btn8').onclick = function () {
    //output
    var ketQua = 0;
    ;
    //progress
    for (var index = 0; index < arr.length; index++) {
        var kiemTra = true;
        for (var i = 2; i < arr[index]; i++) {
            
            if (arr[index] % i === 0) {
                kiemTra = false;
                break;
            }
        }
        if (kiemTra == true) {
            ketQua = arr[index];
            break;
        }

    }
    document.getElementById('inketqua8').innerHTML = ketQua
}

//bài 9
var arr2 = []
document.getElementById('btnthem9').onclick = function () {
    //input
    var soNhap9 = +document.getElementById("nhapso9").value;
    //output new arr2
    //progress 
    arr2.push(soNhap9)
    document.getElementById('inmangqua').innerHTML = arr2
}
document.getElementById('btn9').onclick = function () {
    // input arr2
    //output 
    var dem = 0

    //progress 
    for (index = 0; index < arr2.length; index++) {
        if (Number.isInteger(arr2[index]) == true) {
            dem++
        }
    }
    document.getElementById('inketqua9').innerHTML = 'số nguyên là: ' + dem
}


document.getElementById('btn10').onclick = function () {
    //input arr
    //ouput
    var demDuong = 0;
    var demAm = 0;
    var ketQua = '';
    //progress
    for (index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            demDuong++
        } else if (arr[index] < 0) {
            demAm++
        }
    }
    if (demDuong > demAm) {
        ketQua = 'số dương > số âm'
    } else if (demAm > demDuong) {
        ketQua = 'số âm > số dương'
    } else {
        ketQua = 'số dương = số âm'
    }
    document.getElementById('inketqua10').innerHTML = ketQua

}
// var arr1 = [2, 5, 5, 6, 8, 7]
// arr1.sort(function (a, b) {
//     return a - b;
// });

// console.log(arr1)