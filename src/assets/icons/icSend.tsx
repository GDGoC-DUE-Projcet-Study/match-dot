import type { SVGProps } from 'react';

const IcSend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M4.047 4.867c-.422-.932.547-1.886 1.473-1.448l15.995 7.564c.84.398.84 1.592 0 1.99l-16.09 7.605c-.93.44-1.9-.523-1.468-1.456l3.307-7.148-3.217-7.107Zm15.36 7.11L6.401 18.127 8.819 12.9h5.213v-1.8H8.845L6.473 5.861l12.934 6.117Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcSend;
