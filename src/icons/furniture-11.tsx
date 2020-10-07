
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M559 703v-144c0-26-21-47-47-47s-47 21-47 47v144c-87 18-157 85-179 170-7 29 16 58 46 58h360c30 0 53-29 46-58-22-85-92-152-179-170z',
'M850 397l-139-278c-8-16-24-26-42-26h-314c-18 0-34 10-42 26l-139 278c-16 32 7 68 42 68h436v70c0 13 10 24 23 24s23-11 23-24v-70h110c35 0 58-36 42-68z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'Furniture11'
);
