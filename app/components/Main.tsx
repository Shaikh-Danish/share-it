import React from "react";

import ShareButtons from "./ShareButtons";
import FileViewer from "./FileViewer";

import { useOpenFileViewver } from "../context/OpenFileViewer";

const Main = () => {
  const { isSend } = useOpenFileViewver();

  return (
    <>
      <main
        className={`${
          isSend && "hidden"
        } w-[95%] max-w-[325px] bg-[#6861d5] rounded-[10px] py-[1.75em] px-[1.5em] text-white mt-6`}
      >
        <p className="font-bold text-[20px] mb-2">File Transfer</p>
        <p className="text-[14px] mb-5">
          Transfer files with friends in quick ways
        </p>

        <ShareButtons />
      </main>

      {isSend && <FileViewer />}
    </>
  );
};

export default Main;
