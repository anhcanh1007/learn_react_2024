const YoutubeItem = (props) => {
  return (
    <div className="flex">
      <div className="w-[30%] h-auto">
        <div className="">
          <img alt={props.title} src={props.image} className="w-20 h-20" />
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
