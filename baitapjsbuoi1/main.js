// bài 1
// đầu vào:
// lương 1 ngày 100.000
// xử lý:
// tạo biến lương 1 ngày
// tạo biến số ngày làm
// tạo biến lương
// gán số ngày làm là 9 ngày
// lương= lương 1 ngày * số này làm
// đầu ra:
// lương = 900.000
var luong1ngay = 100.000;
var soNgaylam = 0;
var luongNhanvien = 0;

soNgaylam = 9;

luongNhanvien = luong1ngay * soNgaylam

console.log('luong nhan vien: '+ luongNhanvien)

// bài 2
//     đầu vào:
//     cho 5 số thực ngẫu nhiên
//     xử lý:
//     tạo biến cho 5 số
//     gán giá trị là : 7 11 98 13 12 
//     trungbinh: tổng 5 số chia 5
//     đầu ra:
//     trung bình = 28.2

var so1 =0;
var so2 = 0;
var so3 = 0;
var so4 = 0;
var so5 = 0;
var trungBinh = 0;

so1 = 7 
so2 = 11
so3 = 98 
so4 = 12
so5 = 13
trungBinh = (so1+so2+so3+so4+so5)/5

console.log('trung binh: ' + trungBinh)

// bài 3
//     đầu vào:
//     giá usd: 23.500
//     xử lý:
//     tạo biến giá usd, số tiền usd
//     gán số tiền usd là 7
//     số tiền vn = giá usd * số tiền usd
//     kết quả:
//     số tiền vn: 164.500

var giaUsd = 23.500;
var soTienusd = 0;
var soTienvn = 0;

soTienusd = 7;
soTienvn = soTienusd*giaUsd

console.log('so tien quy doi: '+ soTienvn)

// bài 4
// đầu vào:
// chiều dài, chiều rộng
// xử lý:
// tạo biến dài, rộng
// gán giá trị cho dài =5 rộng=3
// diện tích = dài * rộng
// chu vi = (dài + rộng)*2
// kết quả
// diện tích = 15
// chiu vi = 16

var dai = 0;
var rong = 0;
var dienTich= 0;
var chuVi = 0;

dai = 5
rong = 3
dienTich = dai*rong;
chuVi = (dai+rong)*2;

console.log('dien tich: '+dienTich)
console.log('chu vi: '+chuVi)

// bài 5
// đầu vào:
// số dương n có 2 ký số, n=77
// xử lý:
// tạo biến n
// gán n=77
// soHangdv = n %10
// soHangchuc = math.floor(n/10 )
// đầu ra:
// tổng = 14 

var n = 0;
var soHangdv = 0;
var soHangchuc = 0;
var tong = 0;

n= 77;
soHangdv = n%10
soHangchuc = Math.floor(n/10 )
tong = soHangdv + soHangchuc

console.log('so hang don vi: ' + soHangdv);
console.log('so han chuc: ' +soHangchuc);
console.log('tong: ' + tong)