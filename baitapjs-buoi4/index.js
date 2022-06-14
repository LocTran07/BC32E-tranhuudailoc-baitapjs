document.getElementById('btn1').onclick = function (event) {
    event.preventDefault()
    var a = +document.getElementById('sothu1').value;
    var b = +document.getElementById('sothu2').value;
    var c = +document.getElementById('sothu3').value;
    var ketQua = '';

    if (a > b && b > c) {
        ketQua = c + ' < ' + b + ' < ' + a;
    } else if (a > c && c > b) {
        ketQua = b + ' < ' + c + ' < ' + a;
    } else if (b > a && a > c) {
        ketQua = c + ' < ' + a + ' < ' + b;
    } else if (b > c && c > a) {
        ketQua = a + ' < ' + c + ' < ' + b;
    } else if (c > a && a > b) {
        ketQua = b + ' < ' + a + ' < ' + c;
    } else if (c > b && b > a) {
        ketQua = a + ' < ' + b + ' < ' + c;
    } else {
        ketQua = 'vui lòng ko nhập số bằng nhau và chữ'
    }
    document.getElementById('sosanh1').innerText = ketQua;
}

// bài 2
document.getElementById('btn2').onclick = function (event) {
    event.preventDefault();
    var thanhVien = document.getElementById('user').value;
    var ketQua = '';
    switch (thanhVien) {
        case 'b': {
            ketQua = 'Xin chào bố';
        }; break;
        case 'm': {
            ketQua = 'Xin chào mẹ';
        }; break;
        case 'a': {
            ketQua = 'Xin chào anh trai'
        }; break;
        default: {
            ketQua = 'Xin chào em gái'
        }
    }
    document.getElementById('chao').innerHTML = ketQua

}

document.getElementById('btn3').onclick = function (event) {
    event.preventDefault();
    var a = +document.getElementById('sothu11').value;
    var b = +document.getElementById('sothu22').value;
    var c = +document.getElementById('sothu33').value;
    var kiemTraso = '';
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
        kiemTraso = '3 số chẵn'
    } else if (a % 2 !== 0 && b % 2 === 0 && c % 2 === 0) {
        kiemTraso = '2 số chẵn 1 số lẽ'
    } else if (a % 2 === 0 && b % 2 !== 0 && c % 2 === 0) {
        kiemTraso = '2 số chẵn 1 số lẽ'
    } else if (a % 2 === 0 && b % 2 === 0 && c % 2 !== 0) {
        kiemTraso = '2 số chẵn 1 số lẽ'
    } else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 === 0) {
        kiemTraso = '1 số chẵn 2 số lẻ'
    } else if (a % 2 === 0 && b % 2 !== 0 && c % 2 !== 0) {
        kiemTraso = '1 số chẵn 2 số lẻ'
    } else if (a % 2 !== 0 && b % 2 === 0 && c % 2 !== 0) {
        kiemTraso = '1 số chẵn 2 số lẻ'
    } else {
        kiemTraso = '3 số lẻ'
    }
    document.getElementById('dem').innerHTML = kiemTraso
}



// bài 4
document.getElementById('btn4').onclick = function (event) {
    event.preventDefault();
    var a = +document.getElementById('canh1').value;
    var b = +document.getElementById('canh2').value;
    var c = +document.getElementById('canh3').value;
    ketQua = '';
    if (a === b && b === c) {
        ketQua = 'tam giác đều';
    } else if (a === b) {
        ketQua = 'tam giác cân';
    } else if (b === c) {
        ketQua = 'tam giác cân';
    } else if (a === c) {
        ketQua = 'tam giác cân'
    } else if (a ** 2 === b ** 2 + c ** 2) {
        ketQua = 'tam giác vuông'
    } else if (b ** 2 === a ** 2 + c ** 2) {
        ketQua = 'tam giác vuông'
    } else if (c ** 2 === b ** 2 + a ** 2) {
        ketQua = 'tam giác vuông'
    } else {
        ketQua = 'loại tam giác nào đó'
    }
    document.getElementById('tamgiac').innerHTML = ketQua;
}