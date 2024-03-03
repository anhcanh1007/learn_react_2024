import React from "react";

const CardTailwind = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
          alt="anhcanh"
          className="block w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 w-[80%] bottom-0 bg-white z-10 p-20 rounded-[20px">
        <div className="flex">
          <div>
            <img
              src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
              alt=""
            />
            <p>@anhcanh</p>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>Anh canh Dev</h3>
          <p>12000sl</p>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
