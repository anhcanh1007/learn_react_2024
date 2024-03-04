import React, { useEffect } from "react";
import axios from "axios";

const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photos = () => {
  // useEffect(callback, [dependencies]) => nhận 2 tham số là một function và một dependencies
  // useEffect(() => {
  // side-effect : là thực hiện các tác vụ mà có tác động ra bên ngoài giao diện
  // }, [dependencies])
  useEffect
  return <div></div>;
};

export default Photos;
