
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M371 558c49 0 97-15 137-43 32 22 68 36 106 41h30l-98 379c-7 18-27 26-45 18-8-3-14-10-18-18l-112-377z',
'M781 319c0 75-61 136-137 136s-136-61-136-136l0 0 0 0 0 0c0 75-61 136-137 136s-136-61-136-136 61-137 136-137h9c-27-70 9-149 80-175s149 10 176 80c11 31 11 65 0 95h8c76 0 137 61 137 137z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'IceCream15'
);
