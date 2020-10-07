
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M11,8H7.1l-1.6,3L3.9,8H0l1.95-2.5L0,3h3.9l1.6-3l1.6,3H11L9.05,5.5L11,8z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ReligiousJewish11'
);
