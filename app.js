// ADD PRODUCT

let cart = {
    beauty :[],
    food : [],
    electronics : []
}

function addProduct(category,product,price){
    let good = {
             product,
             price,
        }
    if (cart[category]){
        cart[category].push(good)
        console.log('sucessfully added');
        
    }

}

addProduct('food','corn',50)
addProduct('food','rice',500)
addProduct('beauty', 'comb', '$100')
console.log(cart);
