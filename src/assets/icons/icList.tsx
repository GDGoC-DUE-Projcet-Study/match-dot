import type { SVGProps } from 'react';

const IcList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M3.4 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM3.4 16.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM2 12a1.4 1.4 0 1 1 2.8 0A1.4 1.4 0 0 1 2 12ZM8 5.1a.9.9 0 0 0 0 1.8h13a.9.9 0 0 0 0-1.8H8ZM7.1 18a.9.9 0 0 1 .9-.9h13a.9.9 0 0 1 0 1.8H8a.9.9 0 0 1-.9-.9ZM8 11.1a.9.9 0 1 0 0 1.8h13a.9.9 0 0 0 0-1.8H8Z"
    />
  </svg>
);
export default IcList;
