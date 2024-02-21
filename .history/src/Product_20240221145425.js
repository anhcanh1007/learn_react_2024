function Product(props) {
  const buyProduct = () => {
    alert(props.name + "-" + props.price);
  };
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <button onClick={buyProduct}>Mua ngay</button>
    </div>
  );
}

export default Product;
