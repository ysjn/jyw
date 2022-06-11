import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Back.module.scss';

export const Back: React.FC = () => {
  const [target, setTarget] = useState('/');

  const getTargetPath = () => {
    if (typeof window == 'undefined') {
      return '/';
    }
    let pathname = location.pathname.split('/');
    if (pathname.length == 2) {
      return '/';
    }
    pathname.pop();
    return pathname.join('/');
  };

  useEffect(() => {
    setTarget(getTargetPath());
  }, []);

  return (
    <div className={styles.Back}>
      <Link href={target}>←</Link>
    </div>
  );
};
