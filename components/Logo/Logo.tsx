import styles from './Logo.module.scss';

export const Logo: React.FC = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 300 300"
    className={styles.Logo}
  >
    <circle
      fill="none"
      stroke="transparent"
      strokeWidth="10.5"
      strokeMiterlimit="10"
      cx="150"
      cy="150"
      r="67.5"
    />
    <path
      fill="none"
      stroke="#000000"
      strokeWidth="0.3"
      d="M133.1,110.1l-7.2,59.5c-0.4,2.8-0.8,5.3-1.2,7.5c-0.4,2.2-1,4-1.6,5.6c-0.6,1.5-1.3,2.9-2.1,4.1c-0.8,1.2-1.9,2.4-3,3.4 c-3.5,2.9-7.9,4.3-13.3,4.3c-6.5,0-12.3-2.8-17.4-8.4l6.4-9.3c3.8,3.8,7.3,5.7,10.6,5.7c3,0,5.2-1.5,6.6-4.5 c1.5-2.9,2.7-8.7,3.8-17.4l6.4-50.5H133.1z"
    />
    <path
      fill="none"
      stroke="#000000"
      strokeWidth="0.3"
      d="M190.2,143.6l-43.7,75.9h-12.9l19.4-33.6l-17.3-42.3h12.1l11.9,30.9l17.5-30.9H190.2z"
    />
    <path
      fill="none"
      stroke="#000000"
      strokeWidth="0.3"
      d="M197.5,174.6c0,1.3-0.4,2.4-1.2,3.3c-0.8,0.9-1.7,1.4-2.8,1.4c-1.1,0-2-0.5-2.7-1.4c-0.8-1-1.1-2.1-1.1-3.5 c0-1.4,0.3-2.5,1-3.4c0.7-0.9,1.6-1.4,2.6-1.4c1.1,0,2.1,0.5,2.9,1.5C197.1,172,197.5,173.2,197.5,174.6z"
    />
  </svg>
);
