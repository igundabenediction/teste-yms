/*==================================
YMS STORE
CHECKOUT SYSTEM
===================================*/


document.addEventListener("DOMContentLoaded",()=>{



const productsBox =
document.getElementById(
"checkoutProducts"
);



const totalBox =
document.getElementById(
"checkoutTotal"
);




let panier =
JSON.parse(
localStorage.getItem("ymsPanier")
) || [];




let total = 0;







/*==================================
AFFICHAGE COMMANDE
===================================*/


function loadCheckout(){



productsBox.innerHTML="";

total=0;





if(panier.length===0){


productsBox.innerHTML=

`

<p>
Votre panier est vide.
</p>

`;

return;


}





panier.forEach(product=>{



let price =
parseFloat(
product.price.replace("$","")
);



let qty =
parseInt(
product.quantity || 1
);



total += price * qty;







productsBox.innerHTML +=


`

<div class="checkout-product">


<img src="${product.image}">



<div>


<h4>
${product.name}
</h4>


<p>
${qty} × ${product.price}
</p>


</div>



</div>


`;



});






totalBox.textContent =
total+"$";



}




loadCheckout();









/*==================================
CONFIRMATION COMMANDE
===================================*/


const orderButton =
document.getElementById(
"orderButton"
);





orderButton.addEventListener(
"click",
()=>{





const name =
document.getElementById(
"clientName"
).value;




const phone =
document.getElementById(
"clientPhone"
).value;




const address =
document.getElementById(
"clientAddress"
).value;




const city =
document.getElementById(
"clientCity"
).value;






const payment =
document.querySelector(
'input[name="payment"]:checked'
);







if(
!name ||
!phone ||
!address ||
!city ||
!payment
){



alert(
"Veuillez remplir toutes les informations."
);



return;


}








let message =

`
🛒 *NOUVELLE COMMANDE YMS STORE*

👤 Client :
${name}

📞 Téléphone :
${phone}

📍 Adresse :
${address}, ${city}


💳 Paiement :
${payment.value}


Produits :
`;







panier.forEach(product=>{


message +=

`
- ${product.name}
(${product.quantity || 1})
${product.price}

`;



});





message +=

`

💰 Total :
${total}$


Merci pour votre confiance.
`;








const whatsappNumber =

"243972000000";






window.open(

"https://wa.me/"
+
whatsappNumber
+
"?text="
+
encodeURIComponent(message)

);








// vider panier


localStorage.removeItem(
"ymsPanier"
);





});





});