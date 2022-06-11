import Link from 'next/link';
import router from 'next/router';
import styles from './Nav.module.scss';
import { HAS_VISITED } from 'lib/constants';
import { LocalStorageEngine } from 'lib/localStorageEngine';

interface NavProps {
  isHome?: boolean;
  noAnimation?: boolean;
}

export const Nav: React.FC<NavProps> = (props) => {
  const clearHasVisited = () => {
    const LS = new LocalStorageEngine();
    if (LS.load(HAS_VISITED)) {
      LS.remove(HAS_VISITED);
    }

    if (router.pathname === '/') {
      return router.reload();
    }

    router.push('/');
  };

  return (
    <div
      className={`${styles.Nav} ${props.isHome ? styles.Nav__home : ''} ${
        props.noAnimation ? styles.Nav__noAnim : ''
      }`}
    >
      <div onClick={clearHasVisited}>
        <div className={styles.Nav__icon}>Jy.</div>
      </div>
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
};
