import React from "react";
import axios from "axios";

const GetPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {})
    .catch((error) => {});
};

const Photos = () => {
  // useEffect(callback, [dependencies]) => nhận 2 tham số là một function và một dependencies
  // useEffect(() => {
  // side-effect : là thực hiện các tác vụ mà có tác động ra bên ngoài giao diện
  // }, [dependencies])
  return <div></div>;
};

export default Photos;
