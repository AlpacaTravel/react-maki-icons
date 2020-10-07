
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M10,5.5C10,7.9853,7.9853,10,5.5,10S1,7.9853,1,5.5S3.0147,1,5.5,1S10,3.0147,10,5.5z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Circle11'
);
