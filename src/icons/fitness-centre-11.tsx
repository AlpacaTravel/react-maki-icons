
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M7,6H4V5H7ZM2,3V4H1V5A.5.5,0,0,0,1,6V7H2V8H3.5V3Zm8,2V4H9V3H7.5V8H9V7h1V6a.5.5,0,0,0,0-1Z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'FitnessCentre11'
);
