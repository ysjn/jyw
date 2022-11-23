import { Chips } from '@components/Chips/Chips';
import { ChipsItem } from '@components/Chips/ChipsItem';
import { Grid } from '@components/Grid/Grid';
import { GridItem } from '@components/Grid/GridItem';

import { WORKS, FILTERS } from 'lib/constants';
import { useEffect, useRef, useState } from 'react';

export const WorksGrid: React.FC<{
  divider?: boolean;
  currentId?: string;
}> = ({ divider, currentId }) => {
  const [checkedArray, setCheckedArray] = useState(FILTERS.map(() => false));
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const [animate, setAnimate] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const [gridHeight, setGridHeight] = useState<number | undefined>();

  const resizeTimer = useRef(0);
  const resizeHandler = () => {
    window.clearTimeout(resizeTimer.current);
    resizeTimer.current = window.setTimeout(() => {
      setGridHeight(gridRef.current?.clientHeight);
    }, 300);
  };

  const onClick = (index: number) => () => {
    const newArray = [...checkedArray];
    newArray[index] = !newArray[index];
    setCheckedArray(newArray);
  };

  useEffect(() => {
    const filters = FILTERS.map((filter, index) =>
      checkedArray[index] ? filter : undefined,
    ).filter((filter): filter is string => typeof filter === 'string');

    setCurrentFilter(filters);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 0);
  }, [checkedArray]);

  useEffect(() => {
    setGridHeight(gridRef.current?.clientHeight);
    window.addEventListener('resize', resizeHandler);
    () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const filteredWorks = WORKS.filter((work) =>
    currentFilter.length ? currentFilter.some((filter) => work.tags?.includes(filter)) : true,
  ).filter((work) => work.id !== currentId);

  return (
    <div
      style={{
        opacity: animate ? 1 : 0,
        transition: 'opacity 1s',
        paddingTop: 16,
        borderTop: divider ? '1px solid var(--color-border-secondary)' : undefined,
      }}
    >
      <Chips>
        {FILTERS.map((filter, index) => (
          <ChipsItem
            value={filter}
            onClick={onClick(index)}
            checked={checkedArray[index]}
            key={index}
          />
        ))}
      </Chips>
      <div style={{ height: gridHeight }}>
        <Grid ref={gridRef}>
          {filteredWorks.map((work, index) => (
            <GridItem animate={animate} key={index}>
              {work.href && work.src && (
                <a href={work.href}>
                  <img
                    src={work.src}
                    alt={work.alt}
                    width="220"
                    height="150"
                    style={{ width: '100%', verticalAlign: 'top' }}
                  />
                </a>
              )}
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};
