let products = JSON.parse(localStorage.getItem("products")) || [];
let edit = null;

function saveProduct(){

let name = document.getElementById("name").value;
let price = Number(document.getElementById("price").value);
let stock = Number(document.getElementById("stock").value);
let image = document.getElementById("image").value || "https://via.placeholder.com/200";

if(!name || !price || !stock){
alert("Please fill all fields");
return;
}

let p = {
id: edit || Date.now(),
name: name,
price: price,
stock: stock,
image: image
};

if(edit){
products = products.map(x => x.id == edit ? p : x);
edit = null;
}else{
products.push(p);
}

localStorage.setItem("products", JSON.stringify(products));

alert("Product Saved Successfully");

document.getElementById("name").value = "";
document.getElementById("price").value = "";
document.getElementById("stock").value = "";
document.getElementById("image").value = "";

showProducts();
}

function showProducts(){

let list = document.getElementById("list");

if(!list) return;

list.innerHTML = "";

products.forEach(p => {

list.innerHTML += `
<div class="product">

<img src="${p.image}" width="150">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<p>Stock: ${p.stock}</p>

<button onclick="editProduct(${p.id})">Edit</button>

<button onclick="deleteProduct(${p.id})"
style="background:red;color:white;border:none;padding:5px;">
Delete
</button>

</div>
`;

});

}

function deleteProduct(id){

products = products.filter(p => p.id != id);

localStorage.setItem("products", JSON.stringify(products));

showProducts();

}

function editProduct(id){

let p = products.find(x => x.id == id);

document.getElementById("name").value = p.name;
document.getElementById("price").value = p.price;
document.getElementById("stock").value = p.stock;
document.getElementById("image").value = p.image;

edit = id;

}

showProducts();
