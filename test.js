import fs from "fs";
import path from "path";

// === Configuration ===
const ROOT_DIR = "./"; // your Vite project root
const OUTPUT_FILE = "code.txt";

const IGNORE_DIRS = new Set(["node_modules", "dist", ".git", ".vite"]);
const IGNORE_EXTS = new Set([
  ".png", ".jpg", ".jpeg", ".svg", ".gif", ".webp",".txt",
  ".ico", ".woff", ".woff2", ".ttf", ".eot", ".mp4", ".mp3"
]);

// === Utility functions ===
function shouldIgnore(filePath) {
  const parts = filePath.split(path.sep);

  // ignore hidden files and folders
  if (parts.some(p => p.startsWith(".") && p !== ".")) return true;

  // ignore certain directories
  if (parts.some(p => IGNORE_DIRS.has(p))) return true;

  // ignore certain file extensions
  const ext = path.extname(filePath).toLowerCase();
  if (IGNORE_EXTS.has(ext)) return true;

  return false;
}

function* walkDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (shouldIgnore(fullPath)) continue;

    if (file.isDirectory()) {
      yield* walkDir(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function combineFiles(rootDir, outputFile) {
  const outStream = fs.createWriteStream(outputFile, { encoding: "utf-8" });

  for (const filePath of walkDir(rootDir)) {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const relativePath = path.relative(rootDir, filePath);
      outStream.write(`\n\n--- FILE: ${relativePath} ---\n`);
      outStream.write(content + "\n");
    } catch (err) {
      console.warn(`Skipping ${filePath}: ${err.message}`);
    }
  }

  outStream.end();
  console.log(`✅ All files combined into ${outputFile}`);
}

// === Run ===
combineFiles(ROOT_DIR, OUTPUT_FILE);
