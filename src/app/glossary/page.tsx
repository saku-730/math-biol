// app/glossary/page.tsx
import { getGlossaryMarkdownFiles, readMarkdownFile } from "@/lib/md-utils";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; 

// Glossary ページのコンポーネント
export default async function GlossaryPage() {
  // glossary ディレクトリ内の Markdown ファイルを取得
  const files = getGlossaryMarkdownFiles();

  // ファイルのタイトルを取得
  const fileData = files.map((file) => {
    const { meta, content} = readMarkdownFile(file.replace(/\.md$/, ""));
    return { slug: file.replace(/\.md$/, ""), title: meta?.title || "タイトルなし", tags:meta?.tags,content };
  });

  // タイトルでアルファベット順にソート
  fileData.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">用語集</h1>
      <ul className="grid grid-cols-3 gap-4 text-center list-inside list-disc pl-6 w-[80%] mx-auto">
        {fileData.map((file) => (
          <li key={file.slug} className="mb-3">
            <Link href={`#${file.slug}`} className="text-blue-600 hover:underline">
              {file.title}
            </Link>
          </li>
        ))}
      </ul>

       {/* 用語ページ prose prose-zinc dark:prose-invert*/}
       <div className="prose prose-zinc dark:prose-invert max-w-none w-[80%] mx-auto">  
        {fileData.map((file) => (
          <div key={file.slug} id={file.slug} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{file.title}</h2>

            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {file.content}
            </ReactMarkdown>
            <hr className="my-6 border-gray-400 dark:border-gray-600" />
          </div>
        ))}
      </div>
    </Layout>
  );
}