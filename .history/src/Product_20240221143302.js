function Product() {
  let products = [
    {
      id: 1,
      name: "iphone 7 plus",
      price: 1200000,
    },
    {
      id: 2,
      name: "iphone 8 plus",
      price: 1400000,
    },
    {
      id: 3,
      name: "iphone x",
      price: 1800000,
    },
  ];

  let elements = products.map((product, index) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <button>Mua ngay</button>
      </div>
    );
  });

  return (
    <div></div>
  )
}

export default Product;
