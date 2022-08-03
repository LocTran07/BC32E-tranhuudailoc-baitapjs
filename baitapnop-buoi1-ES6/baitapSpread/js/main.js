const str = document.querySelector('.heading').innerHTML
console.log(str)
const arr = [...str]
console.log(arr)
let html = ''
window.onload = () => {
    for (let a of arr) {
        html += `
        <span>${a}</span>
        `
    }
    document.querySelector('.heading').innerHTML = html
}


var arr1 = [1,2,3,4,5,6]
const ao= (para) => {
    console.log(para)
}
ao(arr1)
// var kq = arr1.includes(1)
var kq = ''


// kq = true&false
// kq = 0

if(!kq){
console.log('asd')
    
}
