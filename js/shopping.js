const cartArray = [];

function display(cartArray){
    let totalPrice = 0;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    for(let i=0;i<cartArray.length;i++){
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th>${i+1}</th>
            <td>${name}</td>
            <td>${price}</td>
        </tr>
        `;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th></th>
            <td class="text-red-600 font-bold text-xl">Total Price</td>
            <td class="text-red-600 font-bold text-xl">${totalPrice}</td>
        </tr>
        `;
        tableBody.appendChild(tr);
}

function addToCart(element){

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.children[0].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArray.push(productObj);
    document.getElementById('total-added-products').innerText = cartArray.length;
    display(cartArray);
}