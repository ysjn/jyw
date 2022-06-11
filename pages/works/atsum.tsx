import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';

const works_atsum: NextPage = () => {
  const gallery = [
    { src: '/works/atsum/1.png', thSrc: '/works/atsum/th_1.png' },
    { src: '/works/atsum/2.png', thSrc: '/works/atsum/th_2.png' },
    { src: '/works/atsum/3.png', thSrc: '/works/atsum/th_3.png' },
    { src: '/works/atsum/4.png', thSrc: '/works/atsum/th_4.png' },
  ];
  return (
    <div>
      <Head>
        <title>Works. atumatter</title>
      </Head>
      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <Grid column={2} gap={16} noBackground noBorder>
            <GridItem>
              <Grid column={2}>
                {gallery.map((item, index) => (
                  <GridItem key={index}>
                    <Link href={item.src}>
                      <a>
                        <Image src={item.thSrc} width="240" height="150" alt="" />
                      </a>
                    </Link>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
            <GridItem>
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
                <Link href="http://www.idd.tamabi.ac.jp/m47069/works/atsumatter/" target="_blank">
                  サイトを開く / Launch site
                </Link>
              </p>
            </GridItem>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default works_atsum;
