import React from "react";
import Image from "next/image";

type Props = {
  dir: string;
};

const Directory = ({ dir }: Props) => {
  return (
    <>
      {dir.includes(".") ? (
        <div className="flex items-center gap-2">
          <Image src="/file.png" height={30} width={30} alt="file" />
          <div>{dir}</div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Image src="/folder.png" height={30} width={30} alt="folder" />
          <p>{dir}</p>
        </div>
      )}
    </>
  );
};

export default Directory;
