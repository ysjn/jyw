import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import { Footer } from '@/components/Footer/Footer';
import { Logo } from '@/components/Logo/Logo';
import { Nav } from '@/components/Nav/Nav';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jy. Portfolio</title>
      </Head>
      <div id="logo">
        <Logo />
        <Nav isHome />
      </div>

      <div id="wrapper">
        <div id="main">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <Link href="/works/blocks">
                  <Image src="/slideshow/1.jpg" width="900" height="600" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/works/blocks">
                  <Image src="/slideshow/2.jpg" width="900" height="600" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/works/2032">
                  <Image src="/slideshow/3.jpg" width="900" height="600" alt="" />
                </Link>
              </li>
              <li>
                <Link href="/works/bfp">
                  <Image src="/slideshow/4.jpg" width="900" height="600" alt="" />
                </Link>
              </li>
            </ul>
          </div>

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
