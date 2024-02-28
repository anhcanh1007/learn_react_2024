import { YoutubeData } from "../ultils/YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);

  return (
    <div className="flex flex-row justify-around">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        return (
          <YoutubeItem
            key={item.id}
            title={item.title}
            image={item.image}
            className={new}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
