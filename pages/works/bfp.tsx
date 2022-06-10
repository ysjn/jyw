import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const works_bfp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works. Binary Fingerprints</title>
      </Head>

      <Nav />
      <div id="wrapper">
        <div id="main">
          <Back />
          <div id="workContainer" className="clearfix">
            <div id="Limg">
              <a href="/works/bfpImg/1.jpg" data-lightbox="fbm">
                <Image
                  src="/works/bfpImg/th_1.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/bfpImg/2.jpg" data-lightbox="fbm">
                <Image
                  src="/works/bfpImg/th_2.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/bfpImg/3.jpg" data-lightbox="fbm">
                <Image
                  src="/works/bfpImg/th_3.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/bfpImg/4.png" data-lightbox="fbm">
                <Image
                  src="/works/bfpImg/th_4.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
            </div>

            <div id="Rtext">
              <p>
                <b>Binary Fingerprints : Ubiquitous Archiving</b>
                <br />
                <br />
                私達が日々利用しているSNSにはプライバシー情報が漏洩する危険が潜んでいます。そんな見えない危険を可視化し、ユーザーに喚起するインスタレーション・コンセプトです。
                <br />
                <br />
                <br />
                Social Networking sites that we use everyday, are full of our personal information.
                This is an installation concept aiming to visualise and call an attention for risks
                of leaking private information.
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default works_bfp;
