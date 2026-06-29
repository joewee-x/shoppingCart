let fashion = [
    { name: "red bag", price: 200 },
    { name: "black bag", price: 400 },
    { name: "yellow bag", price: 80},
]
let resulta = [];

function discountPrice(arr, item, discount) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i].name) {
            let result = arr[i].price * discount / 100;
            resulta.push(result)
             console.log(resulta)
        }
    }
}

discountPrice(fashion,"black bag",25)