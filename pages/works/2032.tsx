import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';

const works_2032: NextPage = () => {
  const gallery = [
    { src: '/works/2032/1.png', thSrc: '/works/2032/th_1.png' },
    { src: '/works/2032/2.png', thSrc: '/works/2032/th_2.png' },
    { src: '/works/2032/3.png', thSrc: '/works/2032/th_3.png' },
    { src: '/works/2032/4.png', thSrc: '/works/2032/th_4.png' },
  ];
  return (
    <div>
      <Head>
        <title>Works. #2032</title>
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
                <Link href="http://www.idd.tamabi.ac.jp/m47069/2032/index.html" target="_blank">
                  サイトを開く(音が出ます)/ Launch site(w/sound)
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

export default works_2032;
