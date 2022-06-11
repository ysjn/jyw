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
                <GridItem>
                  <Link href="/works/2032Img/1.png">
                    <a>
                      <Image src="/works/2032Img/th_1.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/2032Img/2.png">
                    <a>
                      <Image src="/works/2032Img/th_2.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/2032Img/3.png">
                    <a>
                      <Image src="/works/2032Img/th_3.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/2032Img/4.png">
                    <a>
                      <Image src="/works/2032Img/th_4.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
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
                <Link
                  href="http://www.idd.tamabi.ac.jp/m47069/2032/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
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
