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

const Works: NextPage = () => (
  <div>
    <Head>
      <title>Jy. Works</title>
    </Head>
    <Nav />
    <div className="Wrapper">
      <div className="Main">
        <Back />
        <Grid>
          {WORKS.map((work, index) => (
            <GridItem key={index}>
              {work.href && work.src && (
                <Link href={work.href}>
                  <a style={{ width: '100%' }}>
                    <Image
                      src={work.src}
                      alt={work.alt}
                      layout="responsive"
                      width="220"
                      height="150"
                    />
                  </a>
                </Link>
              )}
            </GridItem>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  </div>
);

export default Works;
