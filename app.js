function applyDiscount(array, discount){
    array.forEach(item => {
        let discounted = (discount / 100) * item.price
        item.price = item.price - discounted
    })
    return array
}