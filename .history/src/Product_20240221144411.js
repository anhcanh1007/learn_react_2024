function Product() {
  

  let buyProduct = () => {
    alert(this.props.name);
  };

  let elements = products.map((product, index) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <button onClick={buyProduct}>Mua ngay</button>
      </div>
    );
  });

  return (
    <div>
      <h1>{this.props.name}</h1>
      <h1>{this.props.price}</h1>
    </div>
  );
}

export default Product;
