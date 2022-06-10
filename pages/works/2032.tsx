import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const works_2032: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works. #2032</title>
      </Head>

      <Nav />
      <div id="wrapper">
        <div id="main">
          <Back />
          <div id="workContainer" className="clearfix">
            <div id="Limg">
              <a href="/works/2032Img/1.png" data-lightbox="fbm">
                <Image
                  src="/works/2032Img/th_1.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/2032Img/2.png" data-lightbox="fbm">
                <Image
                  src="/works/2032Img/th_2.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/2032Img/3.png" data-lightbox="fbm">
                <Image
                  src="/works/2032Img/th_3.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/2032Img/4.png" data-lightbox="fbm">
                <Image
                  src="/works/2032Img/th_4.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
            </div>

            <div id="Rtext">
              <p>
                <b>#2032</b>
                <br />
                <br />
                「ゲームの世界に囚われた友達を助ける為、呪われたゲームをプレイする主人公。ステージが進む毎に画面がどんどんバグってゆき・・・・。」
                ドットで表現されたゲームの世界と3D
                で表現された現実世界を行き来するアクションホラーゲームです。
                <br />
                <br />
                <br />
                Retro,Pop, Cute, pixelated side-scrolling action game with a taste of horror.
                <br />
                <br />
                <br />
                <a
                  href="http://www.idd.tamabi.ac.jp/m47069/2032/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  サイトを開く(音が出ます)/ Launch site(w/sound)
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default works_2032;
