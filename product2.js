document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log(productId); // Affiche l'ID du produit dans la console
    
    // Appelez la fonction getProduct avec l'ID du produit
    const product = await getProduct(productId);
    console.log(product);
    let cnt=document.createElement("div");
    let cntprodg=document.createElement("div");
    let cntprod=document.createElement("div");
    let tileprod=document.createElement("P");
    let descprod=document.createElement("p");
    let priceprod=document.createElement("p");
    let imgprod=document.createElement("img");
    let val=document.createElement("p");



    let btn=document.createElement("input");
    let btn2=document.createElement("input");
btn.classList.add("type","bt","value");
btn2.classList.add("bt1","value")

    let productimg1 = document.createElement("img");
    productimg1.classList.add("src","img6");
     productimg1.src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png";
    
    
     cntprodg.appendChild(imgprod);
    cntprodg.appendChild(cntprod);
    cntprod.appendChild(tileprod);
    cntprod.appendChild(productimg1)
    cntprod.appendChild(priceprod);
    cntprod.appendChild(descprod);
    cntprod.appendChild(cnt);
    cnt.appendChild(val) ;
    cnt.appendChild(btn2);
    cnt.appendChild(btn) ;

    
    
    document.body.appendChild(cntprodg);


    val.classList.add("val")
cnt.classList.add("c")
cntprodg.classList.add("cnt")
imgprod.classList.add("src","ima");
cntprod.classList.add("cntp");
tileprod.classList.add("title")
priceprod.classList.add("price");
descprod.classList.add("des");

btn.setAttribute("value","add to carte +")
btn.setAttribute("type","button")
imgprod.setAttribute("src",product.image)
    tileprod.innerHTML=product.title;
    priceprod.innerHTML="$"+product.price;
    descprod.innerHTML=product.description;
   val.innerHTML="Quantity"



    



   btn.addEventListener("click",cb);
   function cb (){
    btn2.innerHTML=btn2.innerHTML+1
    
   }

});

async function getProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
}
