
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M6.75,3.5A1.25,1.25,0,1,1,5.5,2.25,1.25,1.25,0,0,1,6.75,3.5Zm-4,2.75A1.25,1.25,0,1,0,4,7.5,1.25,1.25,0,0,0,2.75,6.25Zm5.5,0A1.25,1.25,0,1,0,9.5,7.5,1.25,1.25,0,0,0,8.25,6.25Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'LandmarkJp11'
);
