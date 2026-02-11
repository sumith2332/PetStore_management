let products = JSON.parse(localStorage.getItem("products")) || [];
let div = document.getElementById("products");

// Load products
products.forEach((p, index) => {
div.innerHTML += `
<div class="product">
<img src="${p.image}" width="100%">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<P>${p.stock}</P>
<div id="products"></div>
<button onclick="addToCart(${index})">Add to Cart</button>
</div>
`;
});

// Add item to cart
function addToCart(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(products[index]);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Item added to cart");
}
{
list.innerHTML="";
products.forEach(p=>{
list.innerHTML+=`
<div class="product">
<img src="${p.image}" width="100%">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="del(${p.id})">Delete</button>
</div>
`;
});
}

function del(id){
products=products.filter(x=>x.id!=id);
localStorage.setItem("products",JSON.stringify(products));
show();
}

show();


