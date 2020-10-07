
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M4,7v5h9.5v2H2l0,0l0,0V7.78L1,8.16V6l13-5v2.14L4,7z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Shelter15'
);
