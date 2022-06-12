import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { Chips } from '@/components/Chips/Chips';
import { ChipsItem } from '@/components/Chips/ChipsItem';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';

import { WORKS, FILTERS } from 'lib/constants';

export const WorksGrid = () => {
  const [checkedArray, setCheckedArray] = useState(FILTERS.map(() => false));
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const [animate, setAnimate] = useState(false);

  const onClick = (index: number) => {
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

  return (
    <>
      <Chips>
        {FILTERS.map((filter, index) => (
          <ChipsItem
            value={filter}
            onClick={() => onClick(index)}
            checked={checkedArray[index]}
            key={index}
          />
        ))}
      </Chips>
      <Grid>
        {WORKS.filter((work) =>
          currentFilter.length ? currentFilter.some((filter) => work.tags?.includes(filter)) : true,
        ).map((work, index) => (
          <GridItem animate={animate} key={index}>
            {work.href && work.src && (
              <Link href={work.href}>
                <a style={{ width: '100%' }}>
                  <Image
                    src={work.src}
                    alt={work.alt}
                    layout="responsive"
                    width="220"
                    height="150"
                  />
                </a>
              </Link>
            )}
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
