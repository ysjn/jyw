import Link from 'next/link';
import styles from './Footer.module.scss';

import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';

export const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <p className={styles.Footer__title}>[Jy.] - Jun Yoshida Portfolio Website.</p>
    <Grid column={2} noBorder noBackground>
      <GridItem noCentering>
        <ul>
          <li>
            <Link href="/works">WORKS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </GridItem>
      <GridItem noCentering>
        <ul>
          <li>
            <p>
              <a href="https://www.github.com/ysjn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://www.facebook.com/jun.yoshida.775"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://twitter.com/Ys_Jn" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </p>
          </li>
        </ul>
      </GridItem>
    </Grid>
    <small className={styles.Footer__copy}>
      &copy;
      {` ${new Date().getFullYear()} `}
      Jun Yoshida All Rights Reserved.
    </small>
  </footer>
);
