import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './index.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Footer } from '@/components/Footer/Footer';
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

      <div id="wrapper">
        <div id="main">
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
                <Image src="/slideshow/1.jpg" width="900" height="600" alt="" />
              </Link>
            </div>
            <div>
              <Link href="/works/blocks">
                <Image src="/slideshow/2.jpg" width="900" height="600" alt="" />
              </Link>
            </div>
            <div>
              <Link href="/works/2032">
                <Image src="/slideshow/3.jpg" width="900" height="600" alt="" />
              </Link>
            </div>
            <div>
              <Link href="/works/bfp">
                <Image src="/slideshow/4.jpg" width="900" height="600" alt="" />
              </Link>
            </div>
          </Carousel>

          <div id="contentWrap" className="clearfix">
            <Link href="/works/atsum">
              <div id="at" className="content"></div>
            </Link>
            <Link href="/works/fbm">
              <div id="fbm" className="content"></div>
            </Link>
            <Link href="/works/2032">
              <div id="nZero" className="content"></div>
            </Link>
            <Link href="/works/blocks">
              <div id="blks" className="content"></div>
            </Link>
            <Link href="/works/bfp">
              <div id="bfp" className="content"></div>
            </Link>
            <Link href="#">
              <div className="content">N/A</div>
            </Link>
            <Link href="#">
              <div className="content">N/A</div>
            </Link>
            <Link href="#">
              <div className="content">N/A</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
