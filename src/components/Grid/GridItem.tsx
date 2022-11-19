import classNames from 'classnames';
import styles from './Grid.module.scss';

interface GridItemProps {
  noCentering?: boolean;
  animate?: boolean;
  children?: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = (props) => {
  const className = classNames(styles.Grid__item, {
    [styles.Grid__itemNoCentering]: props.noCentering,
    [styles.Grid__itemAnimation]: props.animate,
  });
  return <div className={className}>{props.children}</div>;
};
