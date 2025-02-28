import { execSync } from "child_process";

function main() {
  if (process.env.DOCKER === "true") {
    console.log("Running in Docker: Installing TypeScript 5.5.4...");
    execSync("npm install typescript@5.5.4 --legacy-peer-deps", { stdio: "inherit" });
  } else {
    console.log("Skipping TypeScript installation.");
  }
}

main();
