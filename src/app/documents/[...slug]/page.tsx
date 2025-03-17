import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllMarkdownFiles, readMarkdownFile } from "@/lib/md-utils";
import Layout from "@/app/components/Layout";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; 
import rehypeRaw from "rehype-raw";

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

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">{fileData.meta?.title || "工事中"}</h1>

       {/* タグを表示 */}
    {fileData.meta?.tags && fileData.meta.tags.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-2 mb-4 ml-[10%]">
        {fileData.meta.tags.map((tags: string) => (
      <a
        key={tags}
        href={`/tags/${tags}`} // タグページのURLにリンク
        className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
      >
        {tags}
      </a>
    ))}
      </div>
    )}

      <div className="prose prose-zinc dark:prose-invert max-w-none w-[80%] mx-auto"> 
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[ rehypeKatex,rehypeRaw]} >
          {fileData.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}
