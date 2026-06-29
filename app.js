let product = [

{product: "electric fan", section : "electronics", price : 2000 },
{product: "electric fan", section : "electronics", price : 2000 },
{product: "electric fan", section : "electronics", price : 2000 },
{product: "electric fan", section : "electronics", price : 2000 },
{product: "electric fan", section : "electronics", price : 2000 }


]

const applyDiscount = (product) => {
  product.forEach(product => {
    product.discountPrice = product.price * 0.9;
  });
};

applyDiscount(product);

console.log(product);