import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    console.log(props)
    <div className="flex flex-row justify-around">
      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem
            key={item.id}
            title={item.title}
            image={item.image}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
