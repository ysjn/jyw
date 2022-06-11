import styles from './Grid.module.scss';

export const GridItem: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <div className={styles.Grid__item}>{props.children}</div>;
};
