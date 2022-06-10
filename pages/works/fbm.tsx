import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const works_fbm: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works. FBmonsters</title>
      </Head>

      <Nav />
      <div id="wrapper">
        <div id="main">
          <Back />
          <div id="workContainer" className="clearfix">
            <div id="Limg">
              <a href="/works/fbmImg/1.png" data-lightbox="fbm">
                <Image
                  src="/works/fbmImg/th_1.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/fbmImg/2.png" data-lightbox="fbm">
                <Image
                  src="/works/fbmImg/th_2.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/fbmImg/3.png" data-lightbox="fbm">
                <Image
                  src="/works/fbmImg/th_3.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/fbmImg/4.png" data-lightbox="fbm">
                <Image
                  src="/works/fbmImg/th_4.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
            </div>

            <div id="Rtext">
              <p>
                <b>FBmonsters</b>
                <br />
                <br />
                FacebookのAPIを使ったゲームウェブサイトです。Facebookアカウントでログインするとランダムでモンスターを召喚し、友達と対戦することができます。Facebookアカウントより情報を取得し、勝敗をウォールに書き込みます。
                <br />
                <br />
                <br />
                Little game app for Facebook. Log in with your facebook account to summon your
                monster and fight against your friends. Post your game results on your facebook
                wall.
                <br />
                <br />
                <br />
                <a
                  href="http://www.idd.tamabi.ac.jp/m47069/FBmonsters/"
                  target="_blank"
                  rel="noreferrer"
                >
                  サイトを開く / Launch site
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

export default works_fbm;
