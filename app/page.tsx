"use client"

import { OpenFileViewerProvider } from "./context/OpenFileViewer";
import Main from "./components/Main";

export default function Home() {
  return (
    <OpenFileViewerProvider>
      <Main />
    </OpenFileViewerProvider>
  );
}
