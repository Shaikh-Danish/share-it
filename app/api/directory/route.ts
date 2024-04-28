import { NextRequest } from "next/server";

import os from "os";
import fs from "fs/promises";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("dir") as string;

  const directories: string[] = await getDirectories(query);

  return Response.json({ status: true, directories });
}

async function getDirectories(path: string): Promise<string[]> {
  if (path === "") {
    path = os.homedir();
  }

  return await getFilesAndDirectories(path);
}

async function getFilesAndDirectories(
  directoryPath: string
): Promise<string[]> {
  const items = await fs.readdir(directoryPath);
  return items.filter((item) => !item.startsWith("."));
}
