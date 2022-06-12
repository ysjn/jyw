import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Chips.module.scss';

interface ChipsItemProps {
  onClick: () => void;
  checked: boolean;
  value: string;
}

export const ChipsItem: React.FC<ChipsItemProps> = (props) => {
  const className = classNames(styles.Chips__item, {
    [styles.Chips__itemChecked]: props.checked,
  });
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={`for_${props.value}`}
        value={props.value}
        defaultChecked={props.checked}
      />
      <label htmlFor={`for_${props.value}`} onClick={props.onClick}>
        {props.value}
      </label>
    </div>
  );
};
