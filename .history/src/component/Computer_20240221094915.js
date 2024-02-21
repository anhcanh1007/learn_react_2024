function Computer(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.id}</h1>
      <h1>{props.weight}</h1>
      <h1>{props.height}</h1>
    </div>
  );
}

export default Computer;
