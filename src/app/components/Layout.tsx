// components/Layout.tsx
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Sidebar from '@/app/components/Sidebar';
import "@/app/globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー（横幅100%固定） */}
      <Header />

      {/* ヘッダーの下にメインコンテンツを並べる */}
      <div className="flex flex-1">
        {/* サイドバー（縦長に固定） */}
        <Sidebar />

        {/* メインコンテンツ */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
      {/* フッター */}
      <Footer />
    </div>
  );
};


export default Layout;
