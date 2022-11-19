import { SLIDE_SHOW } from 'lib/constants';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel = () => (
  <ReactResponsiveCarousel
    showStatus={false}
    showThumbs={false}
    autoPlay
    swipeable
    emulateTouch
    showArrows
    infiniteLoop
  >
    {SLIDE_SHOW.map((slide, index) => (
      <a href={slide.href} style={{ display: 'inline-block' }} key={index}>
        <img src={slide.src} alt={slide.alt} width="100%" />
      </a>
    ))}
  </ReactResponsiveCarousel>
);
