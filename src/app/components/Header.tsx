// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/" style={styles.navLink}>
            ホーム
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/content"  style={styles.navLink}>
            目次 
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/about"  style={styles.navLink}>
            About 
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/contact" style={styles.navLink}>
            お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px 20px',
    marginLeft: '0px',
    paddingLeft: '15%',      // 左のスペースを確保
  },
  navList: {
    display: 'flex',
    justifyContent : 'flex-start',//左寄せ
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '0px',
    width: '100px',
    display: 'flex', 
    justifyContent : 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;
