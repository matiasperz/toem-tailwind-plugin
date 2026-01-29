import fs from "fs";
import path from "path";
import { Readme } from "./components/Readme";

export default async function Home() {
  const readmePath = path.join(process.cwd(), "../README.md");
  const content = fs.readFileSync(readmePath, "utf-8");

  return <Readme content={content} />;
}
