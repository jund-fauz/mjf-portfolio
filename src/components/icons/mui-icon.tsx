import type { SVGProps } from 'react';

export function MuiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="1em" 
      height="1em" 
      fill="currentColor"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 2l8 5 8-5L11 7zm0 10l8 5 8-5-8 5zm0-5l8 5 8-5-8 5zM3 7v10l8-5-8-5zm8 0v10l8-5-8-5zm13-5L11 2v10l8-5 3-2z"/>
    </svg>
  );
}
