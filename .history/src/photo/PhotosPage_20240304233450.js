import React, { useEffect, useState } from "react";
import axios from "axios";

const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list?limit=12")
    .then((response) => {
      console.log(response);
      return response.data;
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
  const [images, setImages] = useState([]);
  useEffect(() => {
    getPhotos().then((imageapi) => {
      setImages(imageapi);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {images.length > 0 &&
          images.map((item, index) => (
            <div key={item.id} className="bg-white rounded-md p-4 shadow-xl">
              <img
                src={item.download_url}
                alt={item.author}
                className="rounded-lg"
              />
            </div>
          ))}
        <div>
          <button className="bg-blue-600 rounded-lg px-8 py-6">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
