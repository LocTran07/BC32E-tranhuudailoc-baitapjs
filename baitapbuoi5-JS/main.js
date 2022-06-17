//**
/** input: diem chuan, diem1,diem2,diem3,khu vuc,doi tuong
 * output:xet dau hoac rot, va tinh tong diem
 * progress: tinh toon diem =diem1 + diem2 + diem3 + khuVuc + doiTuong;
 * roi so sanh voi diem chuan
 * 
*/
function xetdiem(id1, id2, id3, id4, id5, id6, id7) {
    var diemChuan = +document.getElementById(id1).value;
    var diem1 = +document.getElementById(id2).value;
    var diem2 = +document.getElementById(id3).value;
    var diem3 = +document.getElementById(id4).value;
    var khuVuc = +document.getElementById(id5).value;
    var doiTuong = +document.getElementById(id6).value;
    var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    if (tongDiem >= diemChuan) {
        ketQua = 'dau'
    } else if (tongDiem < diemChuan) {
        ketQua = 'rot'
    } else if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        ketQua = 'rot'
    }
    document.getElementById(id7).innerHTML = 'ban da ' + ketQua + '--tong diem la ' + tongDiem
}
document.getElementById("btn1").onclick = function () {
    xetdiem('diemchuan', 'diem1', 'diem2', 'diem3', 'khuvuc', 'doituong', 'xet')
}

/***
 * input ten , kw
 * ouput tong tien 
 * progress: if (kw <= 50) {
        tongTien = kw * 500
    } else if (kw > 50 && kw <= 100) {
        tongTien = (500 * 50) + (100 - kw) * 650
    } else if (kw > 100 && kw <= 200) {
        tongTien = (500 * 50) + (50 * 650) + (kw-100) * 850
    }else if (kw > 200 && kw <= 350) {
        tongTien = (500 * 50) + (50* 650) + (100* 850) + (kw-200) * 1100
    }else if(kw>350) {
        tongTien = (500 * 50) + (50* 650) + (100* 850) + (150* 1100) + (kw-350) * 1300;
    }
 */
function tinhTienDien(id1, id2, id3) {
    var ten = document.getElementById(id1).value;
    var kw = +document.getElementById(id2).value;
    var tongTien = 0;
    if (kw <= 50) {
        tongTien = kw * 500
    } else if (kw > 50 && kw <= 100) {
        tongTien = (500 * 50) + ( kw-50) * 650
    } else if (kw > 100 && kw <= 200) {
        tongTien = (500 * 50) + (50 * 650) + (kw - 100) * 850
    } else if (kw > 200 && kw <= 350) {
        tongTien = (500 * 50) + (50 * 650) + (100 * 850) + (kw - 200) * 1100
    } else if (kw > 350) {
        tongTien = (500 * 50) + (50 * 650) + (100 * 850) + (150 * 1100) + (kw - 350) * 1300;
    }
    document.getElementById(id3).innerHTML = 'tong tien ' + tongTien
}
document.getElementById('btn2').onclick = function () {
    tinhTienDien('ten', 'kw', 'dien')
}
//bài 3
// input là ten, doanh thu, so người ,
// output là thue phải đóng 
// progress tính ThuNCT = doanhThu - (4000000 + (soNguoi * 1600000))
// thue = ThuNCT*phan tram dong thuế (tùy theo mức thuNCT)
function tinhThue(id1, id2, id3, id4) {
    var ten = document.getElementById(id1).value;
    var doanhThu = +document.getElementById(id2).value;
    var soNguoi = +document.getElementById(id3).value;
    var ThuNCT = doanhThu - (4000000 + (soNguoi * 1600000))
    var thue = 0;
    if (ThuNCT <= 60000000) {
        thue = ThuNCT * 0.05
    } else if (ThuNCT > 60000000 && ThuNCT <= 120000000) {
        thue = ThuNCT*0.1
    } else if (ThuNCT > 120000000 && ThuNCT <= 210000000) {
        thue = ThuNCT * 0.15
    } else if (ThuNCT > 210000000 && ThuNCT <= 384000000) {
        thue = ThuNCT * 0.2
    } else if (ThuNCT > 384000000 && ThuNCT <= 624000000) {
        thue = ThuNCT * 0.25
    } else if (ThuNCT > 384000000 && ThuNCT <= 624000000) {
        thue = ThuNCT * 0.25
    } else if (ThuNCT > 624000000 && ThuNCT <= 960000000) {
        thue = ThuNCT * 0.3
    } else {
        thue = ThuNCT * 0.35
    }
    document.getElementById(id4).innerHTML = 'ten: ' + ten + 'thue phai nop: ' + thue
}
document.getElementById('btn3').onclick = function () {
    tinhThue('ten2', 'doanhthu', 'songuoi', 'thue')
}


function taoKetNoi() {
    var x = document.getElementById('loaihinh').value;
    if (x === "cty") {
        ketQua = '<input class=" mt-2 mb-2 col-7" id="soketnoi" placeholder="so ket noi" >'
    } else {
        ketQua = '<input class=" mt-2 mb-2 col-7" id="soketnoi" placeholder="so ket noi" disabled >'
    }

    document.getElementById('ketnoi').innerHTML = ketQua
}
//bài 4 
// input tenkhach, so ket noi ( doanh nghiep),so soKenh
// output tien cap 
// progress tien cap (gia đình) = tongTienCap = 4.5 + 20.5 + (7.5 * soKenh)
// tien cap (doanh nghiep,soKetnoi <= 10 ) = 15 + 75 + (50 * soKenh)
// tien cap (doanh nghiep,soKetnoi > 10 ) =15 + 75 +(5*(soKetnoi-10)) + (50 * soKenh)
function tinhtiencap(id1, id2,id3,id4,id5) {
    soKenh = +document.getElementById(id1).value
    var maKhachHang = document.getElementById(id2).value;
    var soKetnoi = +document.getElementById(id3).value
    var loaiHinh = document.getElementById(id4).value;
    var tongTienCap = 0;
    if (loaiHinh === "giadinh") {
        tongTienCap = 4.5 + 20.5 + (7.5 * soKenh)
    } else if (loaiHinh === "cty" && soKetnoi <= 10) {
        tongTienCap = 15 + 75 + (50 * soKenh)
    } else if (loaiHinh === "cty" && soKetnoi > 10) {
        tongTienCap = 15 + 75 +(5*(soKetnoi-10)) + (50 * soKenh)
    }
    document.getElementById(id5).innerHTML = 'ten: ' + maKhachHang + ' tong tien cap: ' + tongTienCap;
}

document.getElementById('btn4').onclick = function () {
    tinhtiencap('sokenh','makhachhang','soketnoi','loaihinh',"tongtiencap")
}
