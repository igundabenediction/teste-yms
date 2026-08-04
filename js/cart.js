/*==================================
YMS STORE
MINI CART SYSTEM
===================================*/


document.addEventListener("DOMContentLoaded",()=>{



const cartButton =
document.querySelector(".cart");



const cart =
document.querySelector(".mini-cart");



const overlay =
document.querySelector(".mini-cart-overlay");



const close =
document.querySelector(".close-cart");





function openCart(){


cart.classList.add("active");


overlay.classList.add("active");


loadCart();


}





function closeCart(){


cart.classList.remove("active");


overlay.classList.remove("active");


}







if(cartButton){


cartButton.addEventListener(
"click",
(e)=>{


e.preventDefault();


openCart();


});


}





close?.addEventListener(
"click",
closeCart
);



overlay?.addEventListener(
"click",
closeCart
);









function loadCart(){


let panier =
JSON.parse(
localStorage.getItem("ymsPanier")
) || [];



const container =
document.querySelector(
".mini-cart-products"
);



container.innerHTML="";



let total=0;





panier.forEach((item,index)=>{



total +=
parseFloat(
item.price
.replace("$","")
)
*
parseInt(item.quantity || 1);






container.innerHTML +=

`

<div class="cart-item">


<img src="${item.image}">


<div>

<h4>${item.name}</h4>


<span>
${item.price}
</span>


<p>
Quantité : ${item.quantity || 1}
</p>


<a class="remove-item"
data-id="${index}">
Supprimer
</a>


</div>


</div>

`;



});





document.querySelector(
".cart-total strong"
)
.textContent =
total+"$";








document.querySelectorAll(
".remove-item"
)
.forEach(btn=>{


btn.onclick=()=>{


panier.splice(
btn.dataset.id,
1
);


localStorage.setItem(
"ymsPanier",
JSON.stringify(panier)
);



loadCart();


};



});





}





});