// deploy-ghpages.js
import { publish } from "gh-pages";
import path from "path";

// __dirname isn’t available in ES modules, so compute it from import.meta.url:
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The “publish” function signature: publish(directory, options, callback)
const publishDir = path.resolve(__dirname, "dist");

publish(publishDir, {
  branch: "gh-pages",
  repo: "https://github.com/tecktim/olgas-kitchen-main.git",
  message: "auto-deploy: force-add dist (including data.json)",
  add: true,          // <-- this forces ‘git add’ even if .gitignore matches
}, (err) => {
  if (err) {
    console.error("Deploy failed:", err);
    process.exit(1);
  }
  console.log("Deployed to gh-pages ✅");
});
