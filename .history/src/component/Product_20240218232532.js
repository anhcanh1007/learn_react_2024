function Product(){
    let products = [
        {
            id: 1,
            name: 'iphone 7'
        },
        {
            id: 2,
            name: 'iphone 8'
        },
        {
            id: 1,
            name: 'iphone 9'
        }
    ]

    let element = products.map((product, index) => {
        <div>
            <h1></h1>
        </div>
    })

    return (
        <>
            <h1></h1>
        </>
    )
}

export default Product;