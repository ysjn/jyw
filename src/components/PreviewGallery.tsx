import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Grid } from '@components/Grid/Grid';
import { GridItem } from '@components/Grid/GridItem';
import { ZoomIn } from '@components/Icon/ZoomIn';
import { ZoomOut } from '@components/Icon/ZoomOut';

interface GalleryItem {
  src: string;
  thSrc: string;
  alt: string;
}

interface PreviewGalleryProps {
  gallery: GalleryItem[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = (props) => (
  <Grid column={2}>
    <PhotoProvider
      maskOpacity={0.95}
      toolbarRender={({ onScale, scale }) => (
        <>
          <div className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)}>
            <ZoomIn />
          </div>
          <div className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)}>
            <ZoomOut />
          </div>
        </>
      )}
    >
      {props.gallery.map((image: GalleryItem, index) => (
        <GridItem key={index}>
          <PhotoView src={image.src}>
            <img src={image.thSrc} width="240" height="150" alt={image.alt} />
          </PhotoView>
        </GridItem>
      ))}
    </PhotoProvider>
  </Grid>
);
