import classNames from 'classnames';
import { useRef } from 'react';
import styles from './Chips.module.scss';

interface ChipsItemProps {
  onClick: () => void;
  checked: boolean;
  value: string;
}

export const ChipsItem: React.FC<ChipsItemProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const className = classNames(styles.Chips__item, {
    [styles.Chips__itemChecked]: props.checked,
  });

  const onClick = () => {
    props.onClick();
    if (!props.checked) {
      setTimeout(() => ref.current?.parentElement?.scrollTo({ left: 0, behavior: 'smooth' }), 0);
    }
  };

  return (
    <div className={className} ref={ref}>
      <input
        type="checkbox"
        id={`for_${props.value}`}
        value={props.value}
        defaultChecked={props.checked}
      />
      <label htmlFor={`for_${props.value}`} onClick={onClick}>
        {props.value}
      </label>
    </div>
  );
};
