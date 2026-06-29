let products = [

    { productname: "Apple", price: 400, section: "groceries" },
    { productName: "soft drink", price: 700, section: "groceries" },
    { productName: "biscuit", price: 300, section: "groceries" },
    { productName: "sugar", price: 1500, section: "groceries" },
    { productName: "oranges", price: 700, section: "groceries" },
    { productName: "Gum", price: 200, section: "groceries" }
]

 
let productDiscount = products.map((product)=>{
    return {
        ...product,
        price : product.price-product.price*0.10
    }
})

console.log(productDiscount)
