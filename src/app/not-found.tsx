import Link from "next/link";
import Layout from "@/app/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold">404 - ページが見つかりません</h1>
        <p className="mt-4 text-lg">
          ご指定のページは存在しないか、削除された可能性があります。
        </p>
        <Link href="/" className="mt-6 text-blue-500 hover:underline">
          ホームに戻る
        </Link>
      </div>
    </Layout>
  );
}
