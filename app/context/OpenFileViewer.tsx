"use client";

import React, { createContext, useContext, useState } from "react";

interface OpenFileViewer {
  isSend: boolean;
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenFileViewerContext = createContext<OpenFileViewer>({
  isSend: false,
  setIsSend: () => {},
});

export const OpenFileViewerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSend, setIsSend] = useState<boolean>(false);

  return (
    <OpenFileViewerContext.Provider value={{ isSend, setIsSend }}>
      {children}
    </OpenFileViewerContext.Provider>
  );
};

export const useOpenFileViewver = () => useContext(OpenFileViewerContext);
