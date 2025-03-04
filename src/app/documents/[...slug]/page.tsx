import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllMarkdownFiles, readMarkdownFile } from "@/lib/md-utils";
import Layout from "@/app/components/Layout";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; 

// 動的ルートのパスを生成
export async function generateStaticParams() {
  const files = getAllMarkdownFiles();
  return files.map((file) => ({
    slug: file.replace(/\.md$/, "").split("/"), // 配列にする
  }));
}

// ページコンポーネント
export default async function PostPage({ params }: { params: { slug?: string[] } }) {

  const resolvedParams = await params;

  if (!resolvedParams?.slug) return notFound();

  if (!params) return notFound(); // `params` が undefined の場合
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug.join("/") : params.slug;
  if (!slug) return notFound(); // `slug` がない場合は 404
  const fileData = readMarkdownFile(slug); // `slug` を渡す
  if (!fileData) return notFound(); // 記事がなかったら 404

// tailwindcss typographyに適用させるためにclassを設定
  return (
    <Layout>
      <h1 className="text-3xl font-bold">{fileData.meta?.title || "工事中"}</h1>
      <div className="prose prose-zinc dark:prose-invert"> 
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[ rehypeKatex]} >
          {fileData.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}
