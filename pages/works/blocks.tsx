import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';
import { WORKS } from 'lib/constants';

const works_blocks: NextPage = () => {
  const id = 'blks';
  const data = WORKS.find((work) => work.id === id);
  if (!data) {
    return null;
  }
  return (
    <div>
      {data.title && (
        <Head>
          <title>{`Works. ${data.title}`}</title>
        </Head>
      )}
      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <Grid column={2} gap={16} noBackground noBorder>
            {data.gallery && (
              <GridItem>
                <Grid column={2}>
                  {data.gallery.map((item, index) => (
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
            )}
            <GridItem>
              <p>
                <b>{data.title}</b>
                <br />
                <br />
                {data.descJp}
                <br />
                <br />
                <br />
                {data.descEn}
                <br />
                <br />
                <br />
                {data.siteUrl && (
                  <Link href={data.siteUrl} target="_blank">
                    サイトを開く / Launch site
                  </Link>
                )}
              </p>
            </GridItem>
          </Grid>

          <div id="vid">
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
