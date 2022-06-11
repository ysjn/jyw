export const HAS_VISITED = 'jyw.has.visited';

export const WORKS = [
  {
    href: '/works/atsum/',
    src: '/works/atsum/thumbnail.png',
    alt: '',
    tags: ['web', 'individual', 'undergraduate'],
  },
  {
    href: '/works/fbm/',
    src: '/works/fbm/thumbnail.png',
    alt: '',
    tags: ['undergraduate', 'web', 'individual', 'undergraduate'],
  },
  {
    href: '/works/2032/',
    src: '/works/2032/thumbnail.png',
    alt: '',
    tags: ['undergraduate', 'flash', 'group', 'undergraduate'],
  },
  {
    href: '/works/blocks/',
    src: '/works/blks/thumbnail.jpg',
    alt: '',
    tags: ['undergraduate', 'arduino', 'individual', 'undergraduate'],
  },
  {
    href: '/works/bfp/',
    src: '/works/bfp/thumbnail.jpg',
    alt: '',
    tags: ['undergraduate', 'arduino', 'group', 'undergraduate'],
  },
  {},
  {},
  {},
];

// remove duplicate from string array
const dedupe = (arr: string[]) => {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
};

// generate unique strings array from works.tags
export const FILTERS = dedupe(
  WORKS.map((work) => (work.tags ? work.tags : [])).reduce((prev, cur) => [...prev, ...cur], []),
);

export const SLIDE_SHOW = [
  { href: '/works/blocks', src: '/slideshow/1.jpg', alt: '' },
  { href: '/works/blocks', src: '/slideshow/2.jpg', alt: '' },
  { href: '/works/2032', src: '/slideshow/3.jpg', alt: '' },
  { href: '/works/bfp', src: '/slideshow/4.jpg', alt: '' },
];
