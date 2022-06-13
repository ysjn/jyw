import FsLightBox from 'fslightbox-react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Back } from '@/components/Back/Back';
import { Footer } from '@/components/Footer/Footer';
import { Grid } from '@/components/Grid/Grid';
import { GridItem } from '@/components/Grid/GridItem';
import { Nav } from '@/components/Nav/Nav';
import { WORKS } from 'lib/constants';

interface WorksContentsProps {
  data: typeof WORKS extends (infer U)[] ? U : never;
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

  const lightBoxImages = props.data.gallery?.map((image) => image.src) || [];

  return (
    <div>
      {props.data.title && (
        <Head>
          <title>{`Works. ${props.data.title}`}</title>
        </Head>
      )}
      <Nav />
      <div className="Wrapper">
        <div className="Main">
          <Back />
          <Grid column={2} gap={16} vAlign="start" noBackground noBorder>
            {props.data.gallery && (
              <GridItem>
                <Grid column={2}>
                  {props.data.gallery.map((image, index) => (
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
                <h1 className="util-MarginBottom--32">{props.data.title}</h1>
                <p className="util-MarginBottom--16">{props.data.descJp}</p>
                <p className="util-MarginBottom--16">{props.data.descEn}</p>
                {props.data.siteUrl && (
                  <a href={props.data.siteUrl} target="_blank" rel="noopener noreferrer">
                    サイトを開く / Launch site
                  </a>
                )}
              </section>
            </GridItem>
          </Grid>
          {props.data.videos &&
            props.data.videos.map((video, index) => (
              <div className="Video" key={index}>
                <iframe src={video.src} frameBorder="0" allowFullScreen />
              </div>
            ))}
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
