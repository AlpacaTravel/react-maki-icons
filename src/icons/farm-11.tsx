
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M6,5L4,4,2,5,1,7v3l1.5,0V8h3v2L7,10V7ZM5,7H3V5.5H5V7Z`

  ,`M10,2A1,1,0,0,0,8,2v8h2V2Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'Farm11'
);
