import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div>
      {YoutubeData.map((item, index) => {
        return <YoutubeItem
                key={item.id}
                propstitle={item.title}
                image={}
        >

        </YoutubeItem>;
      })}
    </div>
  );
};
