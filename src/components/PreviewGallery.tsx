import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Grid } from '@components/Grid/Grid';
import { GridItem } from '@components/Grid/GridItem';

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
    <PhotoProvider maskOpacity={0.95}>
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
