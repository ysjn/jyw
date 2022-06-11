import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';

const works_fbm: NextPage = () => {
  const gallery = [
    { src: '/works/fbm/1.png', thSrc: '/works/fbm/th_1.png' },
    { src: '/works/fbm/2.png', thSrc: '/works/fbm/th_2.png' },
    { src: '/works/fbm/3.png', thSrc: '/works/fbm/th_3.png' },
    { src: '/works/fbm/4.png', thSrc: '/works/fbm/th_4.png' },
  ];
  return (
    <div>
      <Head>
        <title>Works. FBmonsters</title>
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
            </GridItem>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default works_fbm;
