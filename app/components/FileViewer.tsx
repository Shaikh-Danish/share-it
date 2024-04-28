"use client";

import { useEffect, useState } from "react";

import Directory from "./Directory";

const FileViewer = () => {
  const [directory, setDirectory] = useState<string[]>([""]);

  useEffect(() => {
    const getDirectories = async () => {
      const res = await fetch(`/api/directory?dir=${directory}`);

      const directories = await res.json();

      if (directories.status) {
        setDirectory(directories.directories);
      }
    };

    getDirectories();
  }, []);

  return (
    <div>
      {directory.map((dir) => (
        <Directory key={dir} dir={dir} />
      ))}
    </div>
  );
};

export default FileViewer;
