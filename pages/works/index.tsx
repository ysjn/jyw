import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const Works: NextPage = () => (
  <div>
    <Head>
      <title>Jy. Works</title>
    </Head>

    <Nav />
    <div className="Wrapper">
      <div className="Main">
        <Back />
        <ul id="buttonWrap">
          <li
            className="filter"
            style={{ margin: '0px', padding: '5px 10px', border: 'none', cursor: 'default' }}
          >
            sort :
          </li>
          <li className="filter" data-filter="mix">
            all
          </li>
          <li className="filter" data-filter="web">
            web
          </li>
          <li className="filter" data-filter="arduino">
            arduino
          </li>
          <li className="filter" data-filter="flash">
            flash
          </li>
          <li className="filter" data-filter="group">
            group
          </li>
          <li className="filter" data-filter="individual">
            individual
          </li>
        </ul>
        <div id="workContainer">
          <ul id="works">
            <li className="mix content web individual">
              <a href="atsum.html" target="_parent">
                <Image src="/works/thumbs/atsum.png" width="220" height="150" alt="" />
              </a>
            </li>
            <li className="mix content web individual">
              <a href="fbm.html" target="_parent">
                <Image src="/works/thumbs/fbm.png" width="220" height="150" alt="" />
              </a>
            </li>
            <li className="mix content flash group">
              <a href="2032.html" target="_parent">
                <Image src="/works/thumbs/2032.png" width="220" height="150" alt="" />
              </a>
            </li>
            <li className="mix content arduino individual">
              <a href="blocks.html" target="_parent">
                <Image src="/works/thumbs/blks.jpg" width="220" height="150" alt="" />
              </a>
            </li>
            <li className="mix content arduino group">
              <a href="bfp.html" target="_parent">
                <Image src="/works/thumbs/bfp.jpg" width="220" height="150" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  </div>
);

export default Works;
