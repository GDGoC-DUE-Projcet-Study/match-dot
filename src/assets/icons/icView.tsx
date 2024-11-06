import type { SVGProps } from 'react';

const IcView = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.525 12a9.599 9.599 0 0 1 8.482-5.1 9.599 9.599 0 0 1 8.482 5.1 9.599 9.599 0 0 1-8.482 5.1A9.599 9.599 0 0 1 3.525 12Zm18.782.392a.912.912 0 0 0 0-.784 11.401 11.401 0 0 0-10.3-6.508c-4.546 0-8.47 2.66-10.3 6.508a.912.912 0 0 0 0 .784 11.401 11.401 0 0 0 10.3 6.508c4.545 0 8.469-2.66 10.3-6.508ZM9.907 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm2.1-3.9a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcView;
