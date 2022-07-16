var arrNV = []
console.log(arrNV)


// fix lỗi bấm nút chỉnh mà ko bấm cập nhật thì sẽ bị khóa tk 
document.querySelector('#btnThem').onclick = function () {
    document.querySelector('#tknv').disabled = false
    document.querySelector('#tknv').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#password').value = ''
    document.querySelector('#datepicker').value = ''
    document.querySelector('#luongCB').value = ''
    document.querySelector('#chucvu').value = 'Chọn chức vụ'
    document.querySelector('#gioLam').value = ''

}


// thêm nhân viên 
document.querySelector('#btnThemNV').onclick = function () {

    var nv = new Nhanvien()
    nv.taikhoan = document.querySelector('#tknv').value;
    nv.hoten = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matkhau = document.querySelector('#password').value;
    nv.ngaylam = document.querySelector('#datepicker').value;
    nv.luongcoban = document.querySelector('#luongCB').value;
    nv.chucvu = document.querySelector('#chucvu').value;
    nv.giolamtrongthang = document.querySelector('#gioLam').value;
    nv.tongluong = nv.tinhTongLuong();
    nv.xepLoai = nv.xepLoaiNV();
    console.log(nv)

    var valid = true
    // kiểm tra rỗng 
    valid &= kiemTraRong(nv.taikhoan, '#tbTKNV', 'Tài khoản') & kiemTraRong(nv.hoten, '#tbTen', 'Tên') & kiemTraRong(nv.email, '#tbEmail', 'Email') & kiemTraRong(nv.matkhau, '#tbMatKhau', 'Mật khẩu') & kiemTraRong(nv.ngaylam, '#tbNgay', 'Ngày làm ') & kiemTraRong(nv.luongcoban, '#tbLuongCB', 'Lương ') & kiemTraRong(nv.giolamtrongthang, '#tbGiolam', 'Giờ làm ') & kiemTraChucVu(nv.chucvu, '#tbChucVu', 'Chức vụ')
    // kiểm tra thêm 
    valid &= kiemTraTatCaLaSo(nv.taikhoan, '#tbTKNV1', 'Tài khoản') & kiemTraDoDai(nv.taikhoan, '#tbTKNV2', 'Tài khoản', 4, 6) & kiemTraTatCaLaKyTu(nv.hoten, "#tbTen1", 'Tên') & kiemTraLaEmail(nv.email, "#tbEmail1", 'Email') & kiemTraDoDai1(nv.matkhau, '#tbMatKhau1', 'Mật khẩu', 6, 10) & kiemTraLaPassword(nv.matkhau, "#tbMatKhau2", 'Mật khẩu') & kiemTraLaMMDDYYYY(nv.ngaylam, "#tbNgay1", "Ngày làm") & kiemTraGiaTri(nv.luongcoban, "#tbLuongCB1", 'Lương', 1000000, 20000000) & kiemTraGiaTri(nv.giolamtrongthang, "#tbGiolam1", 'Giờ làm', 80, 200)
    if (!valid) {
        return
    }
    arrNV.push(nv)
    luuDL()
    taoBang(arrNV)
}

// tạo bảng 
function taoBang(mang) {
    var html = ''
    mang.forEach(function (a) {
        a.tinhTongLuong1 = function () {
            var luong = 0
            if (this.chucvu === 'Sếp') {
                luong = +this.luongcoban * 3
            } else if (this.chucvu === 'Trưởng phòng') {
                luong = +this.luongcoban * 2
            } else {
                luong = +this.luongcoban
            }

            return luong
        }
        a.xepLoaiNV1 = function () {
            var loai = ''
            if (+this.giolamtrongthang >= 192) {
                loai = 'xuất sắc'
            } else if (+this.giolamtrongthang >= 176 && +this.giolamtrongthang < 192) {
                loai = 'giỏi'
            } else if (+this.giolamtrongthang >= 160 && +this.giolamtrongthang < 176) {
                loai = 'khá'
            } else {
                loai = 'trung bình'
            }
            return loai
        }
        html += `
        <tr>
        <td>${a.taikhoan}</td>
        <td>${a.hoten}</td>
        <td>${a.email}</td>
        <td>${a.ngaylam}</td>
        <td>${a.chucvu}</td>
        <td>${a.tinhTongLuong1()}</td>
        <td>${a.xepLoaiNV1()}</td>
        <td><button  data-toggle="modal" data-target="#myModal" class= "btn btn-success" onclick="chinhsua(${a.taikhoan})"> chỉnh </button></td>
        <td><button  class= "btn btn-danger" onclick="xoa(${a.taikhoan})"> xóa </button></td>
    </tr>
        `

    })
    document.querySelector('#tableDanhSach').innerHTML = html
}

// chỉnh 
function chinhsua(taikhoanchinh) {
    document.querySelector('#tknv').disabled = true
    var indexEdit = arrNV.findIndex(function (a) {
        return a.taikhoan == taikhoanchinh
    })
    var nvChinh = arrNV[indexEdit]

    document.querySelector('#tknv').value = nvChinh.taikhoan
    document.querySelector('#name').value = nvChinh.hoten
    document.querySelector('#email').value = nvChinh.email
    document.querySelector('#password').value = nvChinh.matkhau
    document.querySelector('#datepicker').value = nvChinh.ngaylam
    document.querySelector('#luongCB').value = nvChinh.luongcoban
    document.querySelector('#chucvu').value = nvChinh.chucvu
    document.querySelector('#gioLam').value = nvChinh.giolamtrongthang
}

// cập nhật
document.querySelector('#btnCapNhat').onclick = function () {
    var nv2 = new Nhanvien()
    nv2.taikhoan = document.querySelector('#tknv').value;
    nv2.hoten = document.querySelector('#name').value;
    nv2.email = document.querySelector('#email').value;
    nv2.matkhau = document.querySelector('#password').value;
    nv2.ngaylam = document.querySelector('#datepicker').value;
    nv2.luongcoban = document.querySelector('#luongCB').value;
    nv2.chucvu = document.querySelector('#chucvu').value;
    nv2.giolamtrongthang = document.querySelector('#gioLam').value;
    nv2.tongluong = nv2.tinhTongLuong()
    nv2.xepLoai = nv2.xepLoaiNV();
    console.log(nv2)
    var valid = true
    // kiểm tra rỗng 
    valid &= kiemTraRong(nv2.taikhoan, '#tbTKNV', 'Tài khoản') & kiemTraRong(nv2.hoten, '#tbTen', 'Tên') & kiemTraRong(nv2.email, '#tbEmail', 'Email') & kiemTraRong(nv2.matkhau, '#tbMatKhau', 'Mật khẩu') & kiemTraRong(nv2.ngaylam, '#tbNgay', 'Ngày làm ') & kiemTraRong(nv2.luongcoban, '#tbLuongCB', 'Lương ') & kiemTraRong(nv2.giolamtrongthang, '#tbGiolam', 'Giờ làm ') & kiemTraChucVu(nv2.chucvu, '#tbChucVu', 'Chức vụ')
    // kiểm tra thêm 
    valid &= kiemTraTatCaLaSo(nv2.taikhoan, '#tbTKNV1', 'Tài khoản') & kiemTraDoDai(nv2.taikhoan, '#tbTKNV2', 'Tài khoản', 4, 6) & kiemTraTatCaLaKyTu(nv2.hoten, "#tbTen1", 'Tên') & kiemTraLaEmail(nv2.email, "#tbEmail1", 'Email') & kiemTraDoDai1(nv2.matkhau, '#tbMatKhau1', 'Mật khẩu', 6, 10) & kiemTraLaPassword(nv2.matkhau, "#tbMatKhau2", 'Mật khẩu') & kiemTraLaMMDDYYYY(nv2.ngaylam, "#tbNgay1", "Ngày làm") & kiemTraGiaTri(nv2.luongcoban, "#tbLuongCB1", 'Lương', 1000000, 20000000) & kiemTraGiaTri(nv2.giolamtrongthang, "#tbGiolam1", 'Giờ làm', 80, 200)
    if (!valid) {
        return 
    }

    var indexUpdate = arrNV.findIndex(function (a) {
        return a.taikhoan == nv2.taikhoan
    })
    var nv1 = arrNV[indexUpdate]
    nv1.taikhoan = nv2.taikhoan
    nv1.hoten = nv2.hoten
    nv1.email = nv2.email
    nv1.matkhau = nv2.matkhau
    nv1.ngaylam = nv2.ngaylam
    nv1.luongcoban = nv2.luongcoban
    nv1.chucvu = nv2.chucvu
    nv1.giolamtrongthang = nv2.giolamtrongthang;
    nv1.tongluong = nv2.tinhTongLuong();
    nv1.xepLoai = nv2.xepLoaiNV();
    // document.querySelector('#tknv').disabled = false
    taoBang(arrNV)
    alert("Cập nhật thành công")
}



// xóa
function xoa(taikhoanclick) {
    var indexDel = arrNV.findIndex(function (a) {
        return a.taikhoan == taikhoanclick
    })
    arrNV.splice(indexDel, 1);
    taoBang(arrNV)
}

// tìm nhân viên 
document.querySelector('#btnTimNV').onclick = function () {
    var loaiNV = document.querySelector('#searchName').value
    console.log(loaiNV)
    var findArr = arrNV.filter(function (a) {
        return a.xepLoai === loaiNV
    })
    console.log(findArr)
    taoBang(findArr)
}


// lưu dl 
function luuDL() {
    var string = JSON.stringify(arrNV)
    localStorage.setItem('nv', string)
}

// lấy dl
function layDL() {
    if (localStorage.getItem('nv')) {
        var string = localStorage.getItem('nv');
        arrNV = JSON.parse(string)
        taoBang(arrNV)
    }
}
window.onload = function () {
    layDL()
}