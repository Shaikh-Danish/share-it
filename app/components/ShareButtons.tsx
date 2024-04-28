"use client";

import ButtonSend from "./ButtonSend";
import ButtonReceive from "./ButtonReceive";

const ShareButtons = () => {
  const buttonStyle =
    "text-white text-[16px] cursor-pointer outline-none border-none w-[115px] py-[0.3em] rounded-[10px] bg-[#8178e1]";

  return (
    <>
      <div className="flex justify-between mt-3">
        <ButtonSend classes={buttonStyle} />
        <ButtonReceive classes={buttonStyle} />
      </div>
    </>
  );
};

export default ShareButtons;
