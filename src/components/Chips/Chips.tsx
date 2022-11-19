import classNames from 'classnames';
import styles from './Chips.module.scss';

interface ChipsProps {
  children: React.ReactNode;
}

export const Chips: React.FC<ChipsProps> = (props) => {
  const className = classNames(styles.Chips, {});

  return <div className={className}>{props.children}</div>;
};
