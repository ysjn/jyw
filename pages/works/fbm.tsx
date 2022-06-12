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

const works_fbm: NextPage = () => {
  const id = 'fbm';
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
          <Grid column={2} gap={16} vAlign="start" noBackground noBorder>
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
              <section className="util-MarginTop--16">
                <h1 className="util-MarginBottom--32">{data.title}</h1>
                <p className="util-MarginBottom--16">{data.descJp}</p>
                <p className="util-MarginBottom--16">{data.descEn}</p>
                {data.siteUrl && (
                  <Link href={data.siteUrl} target="_blank">
                    サイトを開く / Launch site
                  </Link>
                )}
              </section>
            </GridItem>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default works_fbm;
