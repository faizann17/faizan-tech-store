function addToCart(name,price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({name:name, price:price});

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Item added to cart!");
}

function displayCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let list = document.getElementById("cart-items");
    let total = 0;

    list.innerHTML = "";

    cart.forEach((item,index)=>{
        let li = document.createElement("li");
        li.innerHTML = item.name + " - ₹" + item.price + 
        ` <button onclick="removeItem(${index})">Remove</button>`;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}