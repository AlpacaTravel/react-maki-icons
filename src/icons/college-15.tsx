
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1 C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1
 c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'College15'
);
