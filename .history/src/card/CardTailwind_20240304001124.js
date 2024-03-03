import React from "react";

const CardTailwind = () => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text bg-primary-gradient ${props.primary ? 'bg-primary-gradient' : 'bg-'}`
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
          alt="anhcanh"
          className="block w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 w-[80%] bottom-0 bg-white z-10 p-20 rounded-[20px]">
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex items-center gap-x-3">
            <img
              src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
              alt=""
              className="w-[30px] h-[30px] rounded-full object-cover flex-shrink-0"
            />
            <p className="font-light text-lg">@anhcanh</p>
          </div>
          <div>256</div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-blue-600">Anh canh Dev</h3>
          <p className="">
            12000sl
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
