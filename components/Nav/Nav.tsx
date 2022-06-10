import Link from 'next/link';
import styles from './Nav.module.scss';

export const Nav: React.FC = () => (
  <div className={styles.Nav}>
    <Link href="/">
      <div className={styles.Nav__icon}>Jy.</div>
    </Link>
    <nav>
      <ul className={styles.Nav__menu}>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/works">WORKS</Link>
        </li>
      </ul>
    </nav>
  </div>
);
