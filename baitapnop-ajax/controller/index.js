// tao bang

function taoBang(mang) {
    var html = ''
    mang.forEach(function (a) {

        html += `
            <tr class="pt-3">
                <td class="">${a.id}</td>
                <td "><img class="img" src="${a.img}" alt=""></td>
                <td class="">${a.name}</td>
                <td class="">${a.price}</td>
                <td class="">${a.description}</td>
                <td class="">${a.type}</td>
                <td class=""><button onclick="xoa(${a.id})" class="btn btn-danger class="""><i class="fa-solid fa-trash"></i></button>
                </td>
                <td class=""><button onclick="chinh(${a.id})" class="btn btn-success class="""><i class="fa-solid fa-pen-to-square"></i></button>            
                </td
            </tr>
        `
    })
    document.querySelector('#tablebody').innerHTML = html
}

// lay du lieu 
function layDL() {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetAll',
        method: 'GET'
    })
    promise.then(function (result) {
        taoBang(result.data)
    })
    promise.catch(function (err) {

    })
}
window.onload = function () {
    layDL()
}

// them san pham

document.querySelector('#create').onclick = function () {
    var product = new Product();
    product.id = document.querySelector('#id').value;
    product.name = document.querySelector('#name').value;
    product.price = document.querySelector('#price').value;
    product.img = document.querySelector('#image').value;
    product.type = document.querySelector('#productType').value;
    product.description = document.querySelector('#description').value;
    console.log(product.img)
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/CreateProduct',
        method: 'POST',
        data: product,
    })
    promise.then(function (result) {
        layDL()
    })
    promise.catch(function (err) {

    })
}
// xoa
function xoa(id) {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/DeleteProduct/' + id,
        method: 'DELETE'
    })
    promise.then(function (result) {
        layDL()
    })
    promise.catch(function (err) {

    })

}
// chinh
function chinh(id) {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetById/' + id,
        method: 'GET'
    })
    promise.then(function (result) {
        var product = result.data;
        document.querySelector('#id').disabled = true
        document.querySelector('#id').value = product.id
        document.querySelector('#name').value = product.name
        document.querySelector('#price').value = product.price
        document.querySelector('#image').value = product.img
        document.querySelector('#productType').value = product.type
        document.querySelector('#description').value = product.description

    })
    promise.catch(function (err) {

    })

}

// cap nhat

document.querySelector('#update').onclick = function () {
    var product = new Product();
    product.id = document.querySelector('#id').value;
    product.name = document.querySelector('#name').value;
    product.price = document.querySelector('#price').value;
    product.img = document.querySelector('#image').value;
    product.type = document.querySelector('#productType').value;
    product.description = document.querySelector('#description').value;

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/UpdateProduct/' + product.id,
        method: 'PUT',
        data: product
    })
    promise.then(function (result) {
        layDL()
    })
    promise.catch(function (err) {

    })

}

document.querySelector('#btnSearch').onclick = function () {

    var name = document.querySelector('#inputSearch').value;
    var name1 = name.trim()
    console.log(name)
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/SearchByName?name=' + name1,
        method: 'GET'
    })
    promise.then(function (result) {
        console.log(result.data)

        taoBang(result.data)
    })
    promise.catch(function (err) {

    })

}