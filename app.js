let fashion = [
    {name: 'shirts', price:2000, section: 'fashion'},
    {name: 'skirts', price:5000, section: 'fashion'},
    {name: 'watches', price:6000, section: 'fashion'},
    {name: 'trousers', price:6000, section: 'fashion'},
    {name: 'wigs', price:8000, section: 'fashion'},
    {name: 'ornament-sets', price:10000, section: 'fashion'}
]


const applyDiscount = ((product) => {
    product.forEach(product => {
        product.discountPrice = product.price * 0.8;
    })
})

applyDiscount(fashion);

console.log(fashion);
