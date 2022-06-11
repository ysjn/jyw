import classNames from 'classnames';
import styles from './Grid.module.scss';

interface GridProps {
  gap?: 8 | 16;
  column?: 2 | 4;
  noBackground?: boolean;
  noBorder?: boolean;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = (props) => {
  const className = classNames(styles.Grid, {
    [styles.Grid__col2]: props.column === 2,
    [styles.Grid__col4]: props.column === 4 || !props.column,
    [styles.Grid__gap8]: props.gap === 8 || !props.gap,
    [styles.Grid__gap16]: props.gap === 16,
    [styles.Grid__noBackground]: props.noBackground,
    [styles.Grid__noBorder]: props.noBorder,
  });
  return <div className={className}>{props.children}</div>;
};
