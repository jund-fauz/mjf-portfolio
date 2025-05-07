import type { SVGProps } from 'react';

export function BootstrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h13A1.5 1.5 0 0 1 16 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5zM1.5 2A.5.5 0 0 0 1 2.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5z" />
      <path d="M6.991 11.689V4.31H4.81V3.2h5.46V4.31H8.051v7.379z" />
    </svg>
  );
}
