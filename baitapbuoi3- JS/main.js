// bai1
document.getElementById('tinhluong').onclick = function () {
    var luong1ngay = document.getElementById('luong1ngay').value;
    var soNgaylam = document.getElementById('songaylam').value;
    var tongLuong = luong1ngay*soNgaylam;
    document.getElementById('tongluong').innerText = tongLuong
}

// bai2
document.getElementById('tinhtrungbinh').onclick = function () {
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;
    var so4 = +document.getElementById('so4').value;
    var so5 = +document.getElementById('so5').value;
    var trungBinh = (so1 + so2 + so3 + so4 + so5)/5;
    document.getElementById('trungbinh').innerHTML = trungBinh
}

// bai3
document.getElementById('quydoi').onclick = function () {
    var tyGia =  new Intl.NumberFormat('vn-VN').format(23500);
    var tienUsd = +document.getElementById('sotienusd').value;
    var tongTienusd = tienUsd*tyGia
    document.getElementById('tongtienusd').innerHTML = tongTienusd
}

// bai4
document.getElementById('tinhdtcv').onclick = function () {
    var chieuDai = +document.getElementById('chieudai').value;
    var chieuRong = +document.getElementById('chieurong').value;
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai+chieuRong)*2;
    document.getElementById('dtcv').innerHTML = 'Diện tích: '+ dienTich + '; ' + 'Chu vi: '+chuVi
}


// bai5
document.getElementById('tinhtong').onclick = function () {
    var so = +document.getElementById('nhapso').value;
    var donVi = so%10;
    var chuc= Math.floor(so/10 );
    var tong = donVi + chuc;
    document.getElementById('tong').innerHTML = tong;
}