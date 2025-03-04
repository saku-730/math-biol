// components/Sidebar.tsx
"use client";
import Link from 'next/link';
import React from 'react';
import { useState } from "react";


const Sidebar = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    biology: false,
    documents: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <aside className="w-[15%] bg-gray-800 text-white min-h-screen p-4">
      <ul className="space-y-2">
          <Link href="/documents/one-sp/one-sp" className="Part">個体群動態</Link>
          <li>
            <button onClick={() => toggleSection("one_sp")} className="Chapter ml-4">
              一種個体群
            </button>
            {openSections.one_sp && (
              <ul className="ml-4 space-y-1">
                <li><Link href="/documents/one-sp/one-sp" className="list-children1">一種個体群概略</Link></li>
                <li><Link href="/documents/malthus" className="list-children1">マルサス型増殖</Link></li>
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => toggleSection("sex_theory")} className="list-parent ml-4">
              性理論
            </button>
            {openSections.sex_theory&& (
              <ul className="ml-4 space-y-1">
                <li><Link href="/documents/sex-theory/sex-theory" className="list-children1">性理論概略</Link></li>
                <li><Link href="/documents/sex-theory/one-sp" className="list-children1">フィッシャー理論</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleSection("documents")}
              className="w-full text-left font-bold hover:text-gray-300"
            >
              ドキュメント
            </button>
            {openSections.documents && (
              <ul className="ml-4 space-y-1">
                <li>
                  <Link href="/documents/test1" className="block hover:text-gray-300">
                    test1
                  </Link>
                </li>
                <li>
                  <Link href="/documents/test2" className="block hover:text-gray-300">
                    test2
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      <nav>
        <ul className="space-y-2">
          <li><Link href="/documents/test" className="block hover:text-gray-300">test</Link></li>
          <li><Link href="/documents/template" className="block hover:text-gray-300">template</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  chapter: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  chapterHover: {
    color: '#b0c4de',
  },
  section: {
    display: 'block',
  },
  sectionHover: {
    color: '#b0c4de',
  },
};

export default Sidebar;
