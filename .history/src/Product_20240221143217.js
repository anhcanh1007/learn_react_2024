function Product()
{
    let products = [
        {
            id: 1,
            name: 'iphone 7 plus',
            price: 1200000
        },
        {
            id: 2,
            name: 'iphone 8 plus',
            price: 1400000
        },
        {
            id: 3,
            name: 'iphone x',
            price: 1800000
        },
    ]

    let elements = products.map((product, index) => {
        return (
            <div>
                <h1>{}</h1>
            </div>
        )
    })
}

export default Product