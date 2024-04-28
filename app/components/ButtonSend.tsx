"use client";

import React from "react";

import { useOpenFileViewver } from "../context/OpenFileViewer";

export default function ButtonSend({ classes }: { classes: string }) {
  const { setIsSend, isSend } = useOpenFileViewver();

  return (
    <button className={classes} onClick={() => setIsSend(true)}>
      Send
    </button>
  );
}
