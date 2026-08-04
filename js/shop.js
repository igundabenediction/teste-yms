/*==================================
YMS STORE
SHOP ENGINE
===================================*/


document.addEventListener("DOMContentLoaded",()=>{





const products = [



{

id:1,

name:"Sneakers Premium",

category:"chaussures",

price:65,

oldPrice:80,

image:"images/products/product1.jpg",

rating:"★★★★★"

},



{

id:2,

name:"Montre Luxe",

category:"accessoires",

price:120,

oldPrice:150,

image:"images/products/product2.jpg",

rating:"★★★★★"

},



{

id:3,

name:"Sac Premium Femme",

category:"femme",

price:90,

oldPrice:110,

image:"images/products/product3.jpg",

rating:"★★★★☆"

},



{

id:4,

name:"Veste Homme",

category:"homme",

price:75,

oldPrice:95,

image:"images/products/product4.jpg",

rating:"★★★★★"

},



{

id:5,

name:"Chaussures Sport",

category:"chaussures",

price:55,

oldPrice:70,

image:"images/products/product5.jpg",

rating:"★★★★☆"

},



{

id:6,

name:"Sac Élégant",

category:"femme",

price:85,

oldPrice:100,

image:"images/products/product6.jpg",

rating:"★★★★★"

}


];









let currentProducts =
[...products];





const container =
document.getElementById(
"productContainer"
);







/*==================================
AFFICHAGE PRODUITS
===================================*/


function displayProducts(items){



container.innerHTML="";





if(items.length===0){



container.innerHTML=

`

<div class="no-result">

Aucun produit trouvé.

</div>

`;

return;


}








items.forEach(product=>{



container.innerHTML +=

`

<article class="product-card">


<div class="product-image">


<span class="badge">
Nouveau
</span>



<img src="${product.image}"
alt="${product.name}">





<div class="product-actions">


<a href="#">

<i class="fa-regular fa-heart"></i>

</a>



<a href="product.html">

<i class="fa-solid fa-eye"></i>

</a>


</div>



</div>





<div class="product-info">


<h3>

${product.name}

</h3>




<div class="rating">

${product.rating}

</div>




<div class="price">


<span class="current-price">

${product.price}$

</span>


<span class="old-price">

${product.oldPrice}$

</span>


</div>





<button class="add-cart">

Ajouter au panier

</button>



</div>


</article>

`;



});





}





displayProducts(products);









/*==================================
FILTRE CATEGORIE
===================================*/


const categoryButtons =
document.querySelectorAll(
".filters button"
);





categoryButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");





const category =
button.dataset.category;





if(category==="all"){


currentProducts =
[...products];


}

else{


currentProducts =
products.filter(
product=>
product.category===category
);


}





displayProducts(currentProducts);



});


});









/*==================================
RECHERCHE
===================================*/


const search =
document.getElementById(
"shopSearch"
);




search?.addEventListener(
"input",
()=>{



const value =
search.value
.toLowerCase();





const result =
currentProducts.filter(
product=>

product.name
.toLowerCase()
.includes(value)

);





displayProducts(result);



});









/*==================================
TRI PRIX
===================================*/


const sort =
document.getElementById(
"sortProducts"
);





sort?.addEventListener(
"change",
()=>{



let sorted =
[...currentProducts];





if(sort.value==="low"){


sorted.sort(
(a,b)=>a.price-b.price
);


}




if(sort.value==="high"){


sorted.sort(
(a,b)=>b.price-a.price
);


}






displayProducts(sorted);



});







});