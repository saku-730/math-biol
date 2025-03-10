// pages/index.tsx トップページ
import React from 'react';
import Layout from '@/app/components/Layout';


export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center">ようこそ！</h1>
      <p className='text-center mt-10'>ここは数理生物学に関する情報をまとめるサイトです。</p>
    </Layout>
  );
};

const styles = {
  title: {
    fontSize: '48px', // フォントサイズを大きくする
    fontWeight: 'bold', // 文字を太くする
    textAlign: 'center', // 中央寄せ
  },
};