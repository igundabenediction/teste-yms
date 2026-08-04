/*==================================
YMS STORE
GESTION PANIER
===================================*/


document.addEventListener("DOMContentLoaded",()=>{



let panier =
JSON.parse(localStorage.getItem("ymsPanier")) || [];





/*==================================
ELEMENT COMPTEUR
===================================*/


const cartCount =
document.querySelectorAll(".cart span");






function updateCartCount(){


cartCount.forEach(counter=>{


counter.textContent =
panier.length;


});


}





updateCartCount();








/*==================================
AJOUT AU PANIER
===================================*/


const buttons =
document.querySelectorAll(".add-cart");





buttons.forEach((button)=>{


button.addEventListener("click",()=>{



const card =
button.closest(".product-card");



if(!card) return;





const product = {


id:Date.now(),


name:
card.querySelector("h3")
.textContent,



price:
card.querySelector(".current-price")
.textContent,



image:
card.querySelector("img")
.src



};





panier.push(product);



localStorage.setItem(
"ymsPanier",
JSON.stringify(panier)
);



updateCartCount();





showMessage(
"Produit ajouté au panier"
);





});



});









/*==================================
MESSAGE NOTIFICATION
===================================*/


function showMessage(text){



const notification =
document.createElement("div");



notification.className =
"cart-notification";



notification.innerHTML =

`
<i class="fa-solid fa-check"></i>
${text}
`;





document.body.appendChild(notification);





setTimeout(()=>{


notification.classList.add("show");


},100);





setTimeout(()=>{


notification.remove();


},3000);



}







});