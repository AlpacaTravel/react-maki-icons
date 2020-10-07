
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M10,4H7V1C6.9616,0.4644,6.5356,0.0384,6,0H5C4.4644,0.0384,4.0384,0.4644,4,1v3H1C0.4644,4.0384,0.0384,4.4644,0,5v1	c0.0384,0.5356,0.4644,0.9616,1,1h3v3c0.0384,0.5356,0.4644,0.9616,1,1h1c0.5356-0.0384,0.9616-0.4644,1-1V7h3
	c0.5356-0.0384,0.9616-0.4644,1-1V5C11,4.4477,10.5523,4,10,4z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Hospital11'
);
