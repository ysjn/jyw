import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Grid.module.scss';

interface GridProps {
  gap?: 8 | 16;
  column?: 2 | 4;
  vAlign?: 'start' | 'end';
  noBackground?: boolean;
  noBorder?: boolean;
  children: React.ReactNode;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const className = classNames(styles.Grid, {
    [styles.Grid__col2]: props.column === 2,
    [styles.Grid__col4]: props.column === 4 || !props.column,
    [styles.Grid__gap8]: props.gap === 8 || !props.gap,
    [styles.Grid__gap16]: props.gap === 16,
    [styles.Grid__vaStart]: props.vAlign === 'start',
    [styles.Grid__vaEnd]: props.vAlign === 'end',
    [styles.Grid__noBackground]: props.noBackground,
    [styles.Grid__noBorder]: props.noBorder,
  });

  return (
    <div className={className} ref={ref}>
      {props.children}
    </div>
  );
});
