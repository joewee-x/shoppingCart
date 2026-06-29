let products = [

    { productname: "Apple", price: 400, section: "groceries" },
    { productName: "soft drink", price: 700, section: "groceries" },
    { productName: "biscuit", price: 300, section: "groceries" },
    { productName: "sugar", price: 1500, section: "groceries" },
    { name: "oranges", price: 700, section: "groceries" },
    { name: "Gum", price: 200, section: "groceries" }
]

 
let productDiscount = products.map((product)=>product.price-product.price*0.10)

console.log(productDiscount)
