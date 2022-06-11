import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';

const works_blocks: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works. Blocks</title>
      </Head>
      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <Grid column={2} gap={16} noBackground noBorder>
            <GridItem>
              <Grid column={2}>
                <GridItem>
                  <Link href="/works/blksImg/1.png">
                    <a>
                      <Image src="/works/blksImg/th_1.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/blksImg/2.png">
                    <a>
                      <Image src="/works/blksImg/th_2.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/blksImg/3.png">
                    <a>
                      <Image src="/works/blksImg/th_3.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/blksImg/4.png">
                    <a>
                      <Image src="/works/blksImg/th_4.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <p>
                <b>Blocks</b>
                <br />
                <br />
                arduinoを使ったインタラクティブなインスタレーションです。赤外線センサーに手をかざし次々と落ちてくる輪郭のないブロックに触れる事でブロックは様々な方向に回転し、落ちてきた時には見えなかった輪郭を魅せます。
                <br />
                <br />
                <br />
                Intuitive installation. Interact with blocks by waving over IR sensor. When the
                blocks are bumped together, they radomly spin around and fly away. Interacting with
                blocks reveals the shape of the falling blocks.
                <br />
                <br />
                <br />
                <Link href="https://vimeo.com/96424638">
                  <a target="_blank" rel="noreferrer">
                    動画を試聴する(Vimeo)/ Play video(Vimeo)
                  </a>
                </Link>
              </p>
            </GridItem>
          </Grid>

          <div id="vid" className="clearfix">
            <iframe
              src="//player.vimeo.com/video/96424638?portrait=0&title=0&badge=0&byline=0&color=EEE"
              width="800"
              height="450"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default works_blocks;
