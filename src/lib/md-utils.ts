import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/markdown");

/**
 * 指定されたディレクトリ以下の全てのMarkdownファイルのパスを取得する
 */
export function getAllMarkdownFiles(dir = contentDir): string[] {
  let files: string[] = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = [...files, ...getAllMarkdownFiles(fullPath)];
    } else if (file.endsWith(".md")) {
      files.push(path.relative(contentDir, fullPath)); // OS依存しない相対パスに修正
    }
  });
  return files;
}

/**
 * 指定されたMarkdownファイルを読み込む
 */
export function readMarkdownFile(slug: string) {
  const filePath = path.resolve(contentDir, `${slug}.md`); // セキュアなフルパス取得
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  return { content, meta: data };
}

