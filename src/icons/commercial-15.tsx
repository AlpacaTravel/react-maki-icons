
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M14,7H1c0.0881-1.3829,0.427-2.7383,1-4h11C13.5731,4.2617,13.9119,5.6171,14,7z M3,8h9v6h-1V9H8v5H3V8z M4,11h3V9H4V11z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Commercial15'
);
