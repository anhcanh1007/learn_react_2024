function Product() {
  

  let buyProduct = () => {
    alert(this.props.name);
  };

 

  return (
    <div>
      <h1>{this.props.name}</h1>
      <h1>{this.props.price}</h1>
    </div>
  );
}

export default Product;
