const YoutubeItem = (props) => {
  return (
    <div className="min-w">
      <div className="h-auto">
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
            <h3 className="text-2xl font-bold">{props.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
