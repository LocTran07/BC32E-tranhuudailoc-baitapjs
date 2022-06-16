// bài 1
document.getElementById('tinhluong').onclick = function () {
    var luong1ngay = document.getElementById('luong1ngay').value;
    var soNgaylam = document.getElementById('songaylam').value;
    var tienLuong = soNgaylam * luong1ngay;
    document.getElementById('tongluong').innerText = tienLuong
}

// bai 2
document.getElementById('tinhtrungbinh').onclick = function () {
    var so1 = +document.getElementById("so1").value;
    var so2 = +document.getElementById("so2").value;
    var so3 = +document.getElementById("so3").value;
    var so4 = +document.getElementById("so4").value;
    var so5 = +document.getElementById("so5").value;
    var tong = so1+so2+so3+so4+so5;
    document.getElementById('trungbinh').innerText=tong
}

// bai 3

document.getElementById('quydoi').onclick = function () {
    var tyGia = +23.500;
    var tienUsd = document.getElementById('sotienusd').value;
    var tienVnd = tienUsd * tyGia;
    document.getElementById('tongtienusd').innerHTML=tienVnd;
}


// bai 4
document.getElementById('tinhdtcv').onclick = function () {
    var chieuDai = +document.getElementById('chieudai').value;
    var chieuRong = +document.getElementById('chieurong').value;
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai+chieuRong)*2;
    document.getElementById('dtcv').innerText = 'dien tich: ' + dienTich + '; '+ 'chu vi: '+ chuVi;
}

// bai 5
document.getElementById('tinhtong').onclick = function () {
    var so = +document.getElementById('nhapso').value;
    var chuc = Math.floor(so/10);
    var donVi = so%10;
    var tong = chuc + donVi;
    document.getElementById('tong').innerText = tong;
}

// bai6
document.getElementById('dangcmt').onclick = function (event) {
    event.preventDefault();
    var noiDung = document.createElement('p');
    noiDung.innerText = document.getElementById('nhapcmt').value;
    noiDung.className = 'alert alert-danger'
    document.getElementById('cmt').appendChild(noiDung)
}