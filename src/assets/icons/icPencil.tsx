import type { SVGProps } from 'react';

const IcPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.67 2.608a1.9 1.9 0 0 0-1.174 0 1.923 1.923 0 0 0-.652.383c-.156.132-.328.304-.507.483l-.021.021L3.1 16.711v4.19h4.19L20.505 7.684l.021-.021c.18-.18.351-.351.484-.507.144-.17.294-.38.383-.653a1.9 1.9 0 0 0 0-1.174 1.924 1.924 0 0 0-.383-.653c-.133-.156-.304-.327-.484-.507l-.696-.696c-.18-.18-.35-.35-.507-.483a1.922 1.922 0 0 0-.652-.383Zm-.657 1.736a.1.1 0 0 1 .141 0l1.503 1.502a.1.1 0 0 1 0 .142L6.544 19.1H4.9v-1.644L18.013 4.344Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcPencil;
