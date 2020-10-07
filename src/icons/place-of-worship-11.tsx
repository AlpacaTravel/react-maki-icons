
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M5.52,0L4,2v1h3V2L5.52,0z M4,4L2,5v5h7V5L7,4H4z M11,5.5V10h-1V5.5C10,5.2239,10.2239,5,10.5,5S11,5.2239,11,5.5z M1,5.5	V10H0V5.5C0,5.2239,0.2239,5,0.5,5S1,5.2239,1,5.5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'PlaceOfWorship11'
);
