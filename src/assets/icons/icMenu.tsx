import type { SVGProps } from 'react';

const IcMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M3.102 5a.9.9 0 0 1 .9-.9h16a.9.9 0 1 1 0 1.8h-16a.9.9 0 0 1-.9-.9ZM3.102 19a.9.9 0 0 1 .9-.9h16a.9.9 0 1 1 0 1.8h-16a.9.9 0 0 1-.9-.9ZM4.002 11.1a.9.9 0 1 0 0 1.8h16a.9.9 0 1 0 0-1.8h-16Z"
    />
  </svg>
);
export default IcMenu;
