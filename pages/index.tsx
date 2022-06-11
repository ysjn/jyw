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
import { HAS_VISITED, WORKS, SLIDE_SHOW } from 'lib/constants';
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
            {SLIDE_SHOW.map((slide, index) => (
              <div key={index}>
                <Link href={slide.href}>
                  <a>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      layout="responsive"
                      width="900"
                      height="600"
                    />
                  </a>
                </Link>
              </div>
            ))}
          </Carousel>

          <Grid>
            {WORKS.map((work, index) => (
              <GridItem key={index}>
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
