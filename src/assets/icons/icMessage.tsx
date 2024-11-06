import type { SVGProps } from 'react';

const IcMessage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.001 2.72c-5.34 0-9.9 3.796-9.9 8.731 0 2.201.93 4.197 2.423 5.715l-.547 3.054a.9.9 0 0 0 1.34.936l2.85-1.663c1.183.438 2.477.69 3.834.69 5.34 0 9.9-3.797 9.9-8.732 0-4.935-4.56-8.73-9.9-8.73Zm0 1.8c-4.59 0-8.1 3.218-8.1 6.931 0 1.805.82 3.476 2.2 4.735a.9.9 0 0 1 .28.824l-.289 1.61 1.545-.901a.9.9 0 0 1 .8-.053 9.246 9.246 0 0 0 3.564.716c4.59 0 8.1-3.217 8.1-6.93 0-3.714-3.51-6.932-8.1-6.932Zm-3 7.1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcMessage;
