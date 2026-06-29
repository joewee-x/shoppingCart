fashion = [
{Item: 'louisVuittonHandbag', Price: 1900},
{Item: 'maryKayLipgloss', Price: 1400},
{Item: 'filaSneakers', Price: 1400},
{Item: 'addidasTrackSuit', Price: 2145}
]


    let fashionItems = fashion.map((product) => product.Price - product.Price * 0.10)

    console.log(fashionItems)