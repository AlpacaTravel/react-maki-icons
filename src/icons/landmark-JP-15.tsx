
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M9.5,4.5a2,2,0,1,1-2-2A2,2,0,0,1,9.5,4.5Zm-6,4a2,2,0,1,0,2,2A2,2,0,0,0,3.5,8.5Zm8,0a2,2,0,1,0,2,2A2,2,0,0,0,11.5,8.5Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'LandmarkJp15'
);
