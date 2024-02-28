import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="flex flex-row">
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
