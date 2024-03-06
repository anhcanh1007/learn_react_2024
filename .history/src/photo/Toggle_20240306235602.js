import React, { useEffect, useState } from "react";

// Lưu ý khi sử dụng useEffect. lí thuyết riêng
// 1. useEffect(callback) , chỉ truyền vào một đối số
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component thêm element vào dom
// 2. useEffect(caLLback, [])
// - chỉ gọi callback một lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

//----------- lí thuyểt chung
// 1. callback luôn được gọi sau khi component mounted
const tabs = ["post", "comments", "albums"];
const Toggle = () => {
  // const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
      {
        posts
      }
        <li>{}</li>
      </ul>
    </div>
  );
};

export default Toggle;
