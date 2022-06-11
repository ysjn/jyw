import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';

const works_bfp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works. Binary Fingerprints</title>
      </Head>
      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <Grid column={2} gap={16} noBackground noBorder>
            <GridItem>
              <Grid column={2}>
                <GridItem>
                  <Link href="/works/bfpImg/1.jpg">
                    <a>
                      <Image src="/works/bfpImg/th_1.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/bfpImg/2.jpg">
                    <a>
                      <Image src="/works/bfpImg/th_2.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/bfpImg/3.jpg">
                    <a>
                      <Image src="/works/bfpImg/th_3.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link href="/works/bfpImg/4.png">
                    <a>
                      <Image src="/works/bfpImg/th_4.png" width="240" height="150" alt="" />
                    </a>
                  </Link>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
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
            </GridItem>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default works_bfp;
