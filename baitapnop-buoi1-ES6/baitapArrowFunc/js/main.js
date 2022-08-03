
let colorArr = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']

window.onload = () => {
    let html = ' '
    for (let a of colorArr) {
        html += `
        <button onclick="doimau('${a}')" class="color-button ${a}"></button>`
        
    }
    document.querySelector('#colorContainer').innerHTML = html
}

// const btnArr = document.querySelectorAll('#colorContainer button')
// console.log(btnArr)
const doimau = (a) => {
            let class1 = `house ${a}`
            document.querySelector("#house").className = class1

    
}
// for(let a of btnArr) {
//     a.onclick = () => {
//         var b = a.classList
//         console.log(b[1])
//         let c = document.querySelector('#house').classList
//         console.log(c)
//         document.querySelector("#house").classList.remove(c[1])
//         document.querySelector("#house").classList.add(b[1])

//     }
// }