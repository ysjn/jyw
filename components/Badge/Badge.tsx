import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
}
export const Badge: React.FC<BadgeProps> = (props) => (
  <div className={styles.Badge}>{props.children}</div>
);
