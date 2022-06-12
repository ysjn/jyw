import FsLightBox from 'fslightbox-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';
import { WORKS } from 'lib/constants';

interface WorksContentsProps {
  id: string;
  children?: React.ReactNode;
}
export const WorksContents: React.FC<WorksContentsProps> = (props) => {
  const [lightBoxControl, setLightBoxControl] = useState({
    isOpen: false,
    currentIndex: 1,
  });

  const openLightBox = (number: number) => {
    setLightBoxControl({
      isOpen: !lightBoxControl.isOpen,
      currentIndex: number,
    });
  };

  const data = WORKS.find((work) => work.id === props.id);
  if (!data) {
    return null;
  }
  const lightBoxImages = data.gallery?.map((image) => image.src) || [];
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
                  {data.gallery.map((image, index) => (
                    <GridItem key={index}>
                      <div onClick={() => openLightBox(index + 1)} style={{ cursor: 'pointer' }}>
                        <Image src={image.thSrc} width="240" height="150" alt={image.alt} />
                      </div>
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
          {props.children}
        </div>
        <FsLightBox
          toggler={lightBoxControl.isOpen}
          sources={lightBoxImages}
          slide={lightBoxControl.currentIndex}
        />
        <Footer />
      </div>
    </div>
  );
};
