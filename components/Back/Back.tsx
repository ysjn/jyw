import router from 'next/router';
import styles from './Back.module.scss';

export const Back: React.FC = () => (
  <div className={styles.Back} onClick={router.back}>
    ←
  </div>
);
