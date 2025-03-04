"use client";
import Link from 'next/link';
import React, { useState } from "react";

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
    <aside style={styles.sidebar}>
        <ul style={{ paddingLeft: 0 }}>
            <li style={styles.listItem}><Link href="/documents/one-sp/one-sp" style={styles.partLink}>個体群動態</Link></li>
            <li style={styles.listItem}>
                <button onClick={() => toggleSection("one_sp")} style={styles.chapterButton}>一種個体群</button>
                {openSections.one_sp && (
                <ul>
                    <li><Link href="/documents/one-sp/one-sp" style={styles.section}>一種個体群概略</Link></li>
                    <li><Link href="/documents/one-sp/malthus" style={styles.section}>マルサス型増殖</Link></li>
                </ul>
                )}
            </li>

        <li style={styles.listItem}><Link href="/documents/sex-theory/sex-theory" style={styles.partLink}>性理論</Link></li>
        <li style={styles.listItem}>
          <button onClick={() => toggleSection("sex_theory")} style={styles.chapterButton}>性理論-基礎</button>
          {openSections.sex_theory && (
            <ul>
              <li><Link href="/documents/sex-theory/sex-theory" style={styles.section}>性理論概略</Link></li>
              <li><Link href="/documents/sex-theory/one-sp" style={styles.section}>フィッシャー理論</Link></li>
            </ul>
          )}
        </li>

        </ul>

      <nav>
        <ul style={{ paddingLeft: 0 }}>
          <li style={styles.listItem}>
            <Link href="/documents/test" style={styles.section}>
              test
            </Link>
          </li>
          <li style={styles.listItem}>
            <Link href="/documents/template" style={styles.section}>
              template
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '15%',
    backgroundColor: '#2d3748', 
    color: 'white',
    minHeight: '100vh',  // サイドバーを画面全てに
    padding: '1rem',  // p-4
  },
  listItem: {
    marginBottom: '0.5rem',  // 
  },
  partLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'white',
  },
  chapterButton: {
    marginLeft: '1rem',  // ml-4
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'white',
  },
  section: {
    display: 'block',
    color: '#edf2f7',  // hover:text-gray-300
    textDecoration: 'none',
    padding: '0.25rem 0',
  },
};

export default Sidebar;
