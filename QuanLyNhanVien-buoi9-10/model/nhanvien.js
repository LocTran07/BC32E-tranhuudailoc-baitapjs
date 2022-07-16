function Nhanvien() {
    this.taikhoan = '';
    this.hoten = '';
    this.email = '';
    this.matkhau = '';
    this.ngaylam = '';
    this.luongcoban = '';
    this.chucvu = '';
    this.giolamtrongthang = '';
    this.tongluong = '';
    this.xepLoai = '';
    this.tinhTongLuong = function () {
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
    this.xepLoaiNV = function () {
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
}