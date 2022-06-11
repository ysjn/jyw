import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './index.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Logo } from '@/components/Logo/Logo';
import { Nav } from '@/components/Nav/Nav';
import { HAS_VISITED } from 'lib/constants';
import { LocalStorageEngine } from 'lib/localStorageEngine';

const Home: NextPage = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useLayoutEffect(() => {
    const LS = new LocalStorageEngine();
    if (LS.load(HAS_VISITED)) {
      setIntroComplete(true);
      return;
    }

    setTimeout(() => {
      setIntroComplete(true);
      LS.save(HAS_VISITED, '1');
    }, 4000);
  }, [setIntroComplete]);

  return (
    <div className={!introComplete ? styles.Root__introPlaying : undefined}>
      <Head>
        <title>Jy. Portfolio</title>
      </Head>
      {!introComplete && <Logo />}
      <Nav noAnimation={introComplete} isHome />

      <div className="Wrapper">
        <div className="Main">
          <Carousel
            swipeable={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={introComplete}
            showArrows
            infiniteLoop
          >
            <div>
              <Link href="/works/blocks">
                <a>
                  <Image src="/slideshow/1.jpg" layout="fill" alt="" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/works/blocks">
                <a>
                  <Image src="/slideshow/2.jpg" layout="fill" alt="" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/works/2032">
                <a>
                  <Image src="/slideshow/3.jpg" layout="fill" alt="" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/works/bfp">
                <a>
                  <Image src="/slideshow/4.jpg" layout="fill" alt="" />
                </a>
              </Link>
            </div>
          </Carousel>

          <Grid>
            <GridItem>
              <Link href="/works/atsum">
                <a>
                  <Image src="/works/thumbs/atsum.png" layout="fill" alt="" />
                </a>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="/works/fbm">
                <a>
                  <Image src="/works/thumbs/fbm.png" layout="fill" alt="" />
                </a>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="/works/2032">
                <a>
                  <Image src="/works/thumbs/2032.png" layout="fill" alt="" />
                </a>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="/works/blocks">
                <a>
                  <Image src="/works/thumbs/blks.jpg" layout="fill" alt="" />
                </a>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="/works/bfp">
                <a>
                  <Image src="/works/thumbs/bfp.jpg" layout="fill" alt="" />
                </a>
              </Link>
            </GridItem>
            <GridItem />
            <GridItem />
            <GridItem />
          </Grid>
          <div id="contentWrap" className="clearfix"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
