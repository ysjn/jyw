import Link from 'next/link';
import styles from './Nav.module.scss';

interface NavProps {
  isHome?: boolean;
}

export const Nav: React.FC<NavProps> = (props) => (
  <div className={`${styles.Nav} ${props.isHome ? styles.Nav__home : ''}`}>
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
