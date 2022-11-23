import styles from './Chips.module.scss';

interface ChipsProps {
  children: React.ReactNode;
}

export const Chips: React.FC<ChipsProps> = (props) => (
  <div className={styles.Chips}>{props.children}</div>
);
