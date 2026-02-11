function payNow(){

let total = localStorage.getItem("cartTotal") || 0;

if(total == 0){
alert("Cart is empty");
return;
}

var options = {
key: "rzp_test_YOUR_KEY",
amount: total * 100,
currency: "INR",
name: "PetStore Pro",

handler: function (){
alert("Payment Successful");

localStorage.removeItem("cart");
localStorage.removeItem("cartTotal");

location="index.html";
}
};

var rzp = new Razorpay(options);
rzp.open();

}
