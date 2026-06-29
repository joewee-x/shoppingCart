//find the most expensive item across all the product and under each section

const mosExpensive = (products) => {
    let sortProd = products.sort((a, b) => b.price - a.price)
    let mostExp = sortProd.find((product, index, arr) => arr[index]);
    return mostExp

};

const mostExpProductByCategory = (products, category) => {
    let filteredProd = products.filter((product) => {
        let categ = '';
        if(product.category === category){
            return{
                ...product, 
                category : categ
            }
        }
    })
    let sorted = filteredProd.sort((a, b) => b.price - a.price)
    let mostExp = filteredProd.find((product, index, arr) => arr[index])
    return mostExp

    
}

console.log(mostExpProductByCategory([
    {name : 'Shirt', category : 'fashion', price : 5000},
    {name : 'Trouser', category : 'fashion', price : 50000},
    {name : 'Manicure', category : 'beauty', price : 600000},
    {name : 'phone', category : 'electronics', price : 56000},
    {name : 'laptop', category : 'electronics', price : 700000},
], 'electronics'))