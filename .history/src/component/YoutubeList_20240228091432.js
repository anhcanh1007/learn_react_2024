import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);

  return (
    <div className="flex flex-row justify-around">
      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem key={item.id} title={item.title} image={item.image}>
            {props.children}
          </YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
