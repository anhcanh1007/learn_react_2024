import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  let newClass = "";
  if (index === 1) newClass = "abc";
  return (
    <div className="flex flex-row justify-around">
      {props.children}
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
