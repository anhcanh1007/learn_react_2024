import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div>
      {YoutubeData.map((item, index) => {
        return <YoutubeItem
                key={item.id}
                title={item.title}
                ima
        >

        </YoutubeItem>;
      })}
    </div>
  );
};
