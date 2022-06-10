import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';

const works_atsum: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works. atumatter</title>
      </Head>

      <Nav />
      <div id="wrapper">
        <div id="main">
          <Back />
          <div id="workContainer" className="clearfix">
            <div id="Limg">
              <a href="/works/atsumImg/1.png" data-lightbox="atsum">
                <Image
                  src="/works/atsumImg/th_1.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/atsumImg/2.png" data-lightbox="atsum">
                <Image
                  src="/works/atsumImg/th_2.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/atsumImg/3.png" data-lightbox="atsum">
                <Image
                  src="/works/atsumImg/th_3.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
              <a href="/works/atsumImg/4.png" data-lightbox="atsum">
                <Image
                  src="/works/atsumImg/th_4.png"
                  width="240"
                  height="150"
                  className="Lthumb"
                  alt=""
                />
              </a>
            </div>

            <div id="Rtext">
              <p>
                <b>あつまったー / atsumatter</b>
                <br />
                <br />
                「ツイートする人々を視覚化する」というコンセプトで制作したインタラクティブなウェブサイトです。好きな単語やハッシュタグを入力し、ツイートを検索すると小さなキャラクターがあつまってきます。ツイートの数により木や草等の画面内のオブジェクトが変化します。
                <br />
                <br />
                <br />
                This was a small project on visualizing social media. An interactive website that
                uses twitter search API. Search for tweet and little characters will
                &quot;gather&quot; as a result. Objects in the field will change according to the
                number of tweets.
                <br />
                <br />
                <br />
                <a
                  href="http://www.idd.tamabi.ac.jp/m47069/works/atsumatter/"
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

export default works_atsum;
