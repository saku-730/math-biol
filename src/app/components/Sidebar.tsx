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
    <aside style={styles.sidebar} className="sidebar">
      <ul style={{ paddingLeft: 0 }}>
        <li style={styles.listItem} className="sidebar-link">
          <Link href="/documents/dynamics" style={styles.partLink}>個体群動態</Link>
        </li>
        <li style={styles.listItem}>
          <button onClick={() => toggleSection("one_sp")} style={styles.chapterButton}>
          <span style={styles.icon}>{openSections.one_sp ? "ー " : "＋ "}</span>
            一種個体群</button>
          {openSections.one_sp && (
            <ul>
              <li className="sidebar-link">
                <Link href="/documents/dynamics/one-sp/one-sp" style={styles.section}>一種個体群概略</Link>
              </li>
              <li className="sidebar-link">
                <Link href="/documents/dynamics/one-sp/malthus" style={styles.section}>マルサス型増殖</Link>
              </li>
            </ul>
          )}
        </li>
        <li style={styles.listItem} className="sidebar-link">
          <Link href="/documents/sex-theory/sex-theory" style={styles.partLink}>性理論</Link>
        </li>
        <li style={styles.listItem}>
          <button onClick={() => toggleSection("sex_theory")} style={styles.chapterButton}>
          <span style={styles.icon}>{openSections.sex_theory ? "ー " : "＋ "}</span>
            性理論-基礎</button>
          {openSections.sex_theory && (
            <ul>
              <li className="sidebar-link">
                <Link href="/documents/sex-theory/sex-theory" style={styles.section}>性理論概略</Link>
              </li>
              <li className="sidebar-link">
                <Link href="/documents/sex-theory/one-sp" style={styles.section}>フィッシャー理論</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <nav>
        <ul style={{ paddingLeft: 0 }} >
          <li style={styles.listItem} className="sidebar-link">
            <Link href="/glossary" style={styles.section}>用語集</Link>
          </li>
          <li style={styles.listItem} className="sidebar-link">
            <Link href="/documents/reference" style={styles.section}>参考文献</Link>
          </li>
          <li style={styles.listItem} className="sidebar-link">
            <Link href="/documents/test" style={styles.section}>test</Link>
          </li>
          <li style={styles.listItem} className="sidebar-link">
            <Link href="/documents/template" style={styles.section}>template</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '15%',
    backgroundColor: '#333333',
    color: 'white',
    minHeight: '100vh',
    padding: '1rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  partLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#5C98D6',
  },
  chapterButton: {
    marginLeft: '1rem',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '#cccccc',
  },
  section: {
    display: 'block',
    color: '#5C98D6',
    textDecoration: 'none',
    padding: '0.25rem 0',
    marginLeft: '2rem',
  },
  icon: {
    fontSize: '1.2rem',
  },
};

export default Sidebar;
