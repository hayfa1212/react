async function getProduct(index) {
    const response = await fetch(`https://fakestoreapi.com/products/${index}`);
    const product = await response.json();
    return product;
}

async function main() {
    let x=1;
  for(j=0;j<=3;j++){   
    let containerprod1=document.createElement("div");
    containerprod1.classList.add("contc");
    for (let i = x; i <=x+3 ; i++) { // Mettez à jour la boucle pour faire les requêtes avec les bons index
        let product = await getProduct(i);
        console.log(product);


        let containerprod = document.createElement("div");
        let contprod = document.createElement("div");
        let contprod2 = document.createElement("div");

        let productimg = document.createElement("img");
        let productcategory = document.createElement("p");
        let productdname = document.createElement("P");
        let productprice = document.createElement("p");


        let productimg1 = document.createElement("img");
   productimg1.classList.add("src","img5");
    productimg1.src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png";

    let productimg2 = document.createElement("img");
    productimg2.classList.add("src","img6");
     productimg2.src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png";


    
    containerprod.classList.add("cont");
        contprod.classList.add("cnt6");
        contprod2.classList.add("cnt7");
        productimg.classList.add("image");
        productcategory.classList.add("cat");
        productdname.classList.add("name");
        productprice.classList.add("price");


        productcategory.innerHTML = product.category;
        
        productdname.innerHTML = product.title;
        productprice.innerHTML = "$"+product.price;
        productimg.setAttribute("src", product.image);




      
        containerprod.appendChild(contprod );
        containerprod.appendChild(productimg);
        containerprod.appendChild(productdname);
        containerprod.appendChild(contprod2)

        contprod.appendChild(productcategory);
        contprod.appendChild(productimg2);
       
        contprod2.appendChild(productprice);
        contprod2.appendChild(productimg1);
      

        containerprod1.appendChild(containerprod)
        document.body.appendChild(containerprod1);

        productimg.addEventListener("click",cb);
        productcategory.addEventListener("click",cb);
         productdname.addEventListener("click",cb);
         productprice.addEventListener("click",cb);
         productimg1.addEventListener("click",cb);
         productimg2.addEventListener("click",cb);

        function cb(){
            window.location.href = `product2.html?id=${product.id}`;
           
        }
        

    }
    x=x+4;
}
 


}


main();



