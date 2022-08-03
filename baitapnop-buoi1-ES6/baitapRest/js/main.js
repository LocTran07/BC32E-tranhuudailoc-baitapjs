const tinhDTB = (...rest) => {
    let sum = 0
    if (rest.length === 3) {
        console.log(rest)
        for (let a of rest) {
            sum += a
        }
    return sum / 3
    } else if (rest.length === 4) {
        console.log(rest)
        for (let a of rest) {
            sum += a
        }
        return sum/4
    }

}

// let a = tinhDTB(1, 2, 3)
// console.log(a)
document.querySelector('#btnKhoi1').onclick = () => {
    let diemToan = +document.querySelector('#inpToan').value 
    let diemLy = +document.querySelector('#inpLy').value 
    let diemHoa = +document.querySelector('#inpHoa').value 
    document.querySelector('#tbKhoi1').innerHTML = tinhDTB(diemToan,diemLy,diemHoa)

}
document.querySelector('#btnKhoi2').onclick = () => {
    let diemVan = +document.querySelector('#inpVan').value 
    let diemSu = +document.querySelector('#inpSu').value 
    let diemDia = +document.querySelector('#inpDia').value 
    let diemAnh = +document.querySelector('#inpEnglish').value 
    document.querySelector('#tbKhoi2').innerHTML = tinhDTB(diemVan,diemSu,diemDia,diemAnh)

}
