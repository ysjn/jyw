import type { NextPage } from 'next';
import Head from 'next/head';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Nav } from '@/components/Nav/Nav';
import { WorksGrid } from '@/modules/WorksGrid';

const Works: NextPage = () => (
  <div>
    <Head>
      <title>Jy. Works</title>
    </Head>
    <Nav />
    <div className="Wrapper">
      <div className="Main">
        <Back />
        <WorksGrid />
      </div>
      <Footer />
    </div>
  </div>
);

export default Works;
