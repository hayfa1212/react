let product1={
    id:"1",
    name:"product1",
    price:10,

};
let product2={
    id:"2",
    name:"product2",
    price:12,

};
let product3={
    id:"3",
    name:"product3",
    price:13,

};
let product4={
    id:"4",
    name:"product4",
    price:14,

};
let products=[];

    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    for (let i=0;i<products.length;i++){
      console.log("product id :"+ products[i].id);
      console.log("product name :"+ products[i].name);
      console.log("product price:"+ products[i].price);
      console.log("--------------");
    }
