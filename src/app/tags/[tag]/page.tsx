// app/tags/[tag].tsx

import { getAllMarkdownFiles, readMarkdownFile } from "@/lib/md-utils";
import Layout from "@/app/components/Layout";
import Link from "next/link";

// 単語ごとのスラッグと日本語タイトルのマッピング
const slugToTitleMap: { [key: string]: string } = {
  "dynamics": "個体群動態",
  "one-sp": "一種個体群",
  "sex-theory": "性理論",
};

// スラッグを日本語タイトルに変換する関数
const getJapaneseTitleFromSlug = (slug: string) => {
  const slugParts = slug.split("/"); // スラッグを "/" で分割
  const translatedParts = slugParts.map(part => slugToTitleMap[part] || part); // 各部分を変換

  return translatedParts.join("/"); // 変換後の部分を "/" で結合して日本語タイトルを作成
};

// タグページのコンポーネント
export default async function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;

  //日本語タグをデコード
  const decodedTag = decodeURIComponent(tag);
  // すべての記事を取得
  const files = getAllMarkdownFiles();

  // 指定されたタグを持つ記事をフィルタリング
  const posts = files
    .map((file) => {
      const { meta } = readMarkdownFile(file.replace(/\.md$/, ""));
      return { slug: file.replace(/\.md$/, ""), meta };
    })
    .filter((post) => post.meta.tags?.includes(decodedTag));

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">タグ:{decodedTag} のページ</h1>
      {posts.length === 0 ? (
        <p>このタグに該当する記事はありません。</p>
      ) : (
        <ul>
          {posts.map((post) =>{
            const japaneseTitle = getJapaneseTitleFromSlug(post.slug); // 日本語タイトルに変換
            return (
            <li key={post.slug} className="mb-2">
              <Link href={`/documents/${post.slug}`} className="text-white-600 mb-6 hover:underline">{post.meta.title}
              </Link>
              <span className="text-blue-300 ml-2">({japaneseTitle})</span> 
            </li>
          )}
        )}
        
        </ul>
      )}
    </Layout>
  );
}