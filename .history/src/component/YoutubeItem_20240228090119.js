const YoutubeItem = (props) => {
  return (
    <div className="flex">
      <div className="w-[30%] h-auto">
        <div className="">
          <img
            alt={props.title}
            src={props.image}
            className="w-full h-96 rounded-t-sm"
          />
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <img
              alt={props.title}
              src={props.image}
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="col-span-3 flex items-center">
            <h3 className="">{props.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
