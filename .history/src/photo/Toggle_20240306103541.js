import React from "react";

// Lưu ý khi sử dụng useEffect
// 1. useEffect(callback) , chỉ truyền vào một đối số
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component thêm element vào dom
// 2. useEffect(caLLback, [])
// - chỉ gọi callback một lần sau khi component mounted
// 3. useEffect(callback,)
const Toggle = () => {
  return <div></div>;
};

export default Toggle;
