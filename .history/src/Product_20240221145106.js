function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <button onClick={buyPoduct}>Mua ngay</button>
    </div>
  );
}

export default Product;
