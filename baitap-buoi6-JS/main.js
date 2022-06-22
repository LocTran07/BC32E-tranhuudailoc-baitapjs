document.getElementById('btn1').onclick = function () {
    //input
    var soNhap = 10000
    //output
    var n = 1
    var tong = 0;
    // progress
    //b1 
    n = 1
    //b2
    while (tong < soNhap) {
        //b3
        tong = tong + n;
       
        if ( tong > soNhap) {
           n
        }else{
            n++
        }
    }
    document.getElementById('raketqua').innerHTML = n
}


document.getElementById('btn2').onclick = function () {
    // input
    var nhapx = +document.getElementById('nhapx').value

    var nhapn = +document.getElementById('nhapn').value
    // output
    var ketQua = 0;
    // /progress
    // b1
    i = 1;
    //b2
    while (i <= nhapn) {
        //b3
        var tong = nhapx ** i;
        ketQua += tong;
        //b4
        i++;
    }
    document.getElementById('raketqua2').innerHTML = ketQua
}

document.getElementById('btn3').onclick = function () {
    //input
    var nhapn = +document.getElementById('nhapn1').value;
    //output
    var ketQua = 1;
    // progress
    //b1
    var n = 1;
    //b2
    while (n <= nhapn) {
        //b3
        ketQua = ketQua * n
        //b4
        n++
    }
    document.getElementById('raketqua3').innerHTML = ketQua
}

document.getElementById('btn4').onclick = function () {
    // input
    var nhapn = +document.getElementById('nhapn4').value;
    //output
    var ketQua = ''
    var ketQua1 = ''
    var ketQua2 = ''
    //progress 
    //b1
    var n = 1;
    //b2
    while (n <= nhapn) {
        if (n % 2 === 0) {
            var divChan = '<div class="bg-danger">chắn</div>'
            ketQua = ketQua + divChan
        }
        else if (n % 2 !== 0) {
            var divLe = '<div class="bg-primary">lẻ</div>'
            ketQua = ketQua + divLe
        }

        n++
    }

    document.getElementById('raketqua4').innerHTML = ketQua
}







