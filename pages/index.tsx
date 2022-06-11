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
import { HAS_VISITED, WORKS } from 'lib/constants';
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

  const slideshow = [
    { href: '/works/blocks', src: '/slideshow/1.jpg' },
    { href: '/works/blocks', src: '/slideshow/2.jpg' },
    { href: '/works/2032', src: '/slideshow/3.jpg' },
    { href: '/works/bfp', src: '/slideshow/4.jpg' },
  ];

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
            {slideshow.map((slide, index) => (
              <div key={index}>
                <Link href={slide.href}>
                  <a>
                    <Image src={slide.src} layout="fill" alt="" />
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
                    <a>
                      <Image src={work.src} layout="fill" alt="" />
                    </a>
                  </Link>
                )}
              </GridItem>
            ))}
          </Grid>
          <div id="contentWrap" className="clearfix"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
