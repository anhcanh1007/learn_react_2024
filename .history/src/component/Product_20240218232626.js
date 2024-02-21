function Product() {
  let products = [
    {
      id: 1,
      name: "iphone 7",
      price: 2000000,
    },
    {
      id: 2,
      name: "iphone 8",
      price: 4000000,
    },
    {
      id: 1,
      name: "iphone 9",
      price: 6000000,
    },
  ];

  let element = products.map((product, index) => {
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
    </div>;
  });

  return <>{element}</>;
}

export default Product;
