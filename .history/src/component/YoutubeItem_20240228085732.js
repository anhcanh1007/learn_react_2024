const YoutubeItem = (props) => {
  return (
    <div className="flex justify-between">
      <div className="w-[">
        <div className="">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <img alt={props.title} src={props.image} />
          </div>
          <div className="col-span-3">
            <h3>{props.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
