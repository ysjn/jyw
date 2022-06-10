import Link from 'next/link';
import styles from './Back.module.scss';

export const Back: React.FC = () => {
  if (typeof window == 'undefined') {
    return null;
  }

  const getTargetPath = () => {
    let pathname = location.pathname.split('/');
    if (pathname.length == 2) {
      return '/';
    }
    pathname.pop();
    return pathname.join('/');
  };

  return (
    <div className={styles.Back}>
      <Link href={getTargetPath()}>←</Link>
    </div>
  );
};
