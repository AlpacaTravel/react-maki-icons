
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M614 692v-112c0-19-15-34-34-34h-68c-19 0-34 15-34 34v112c-105 28-186 115-202 224-3 21 13 40 34 40h472c22 0 37-19 34-40-16-109-97-196-202-224z',
'M931 429l-171-342c-5-11-17-19-30-19h-368c-13 0-24 8-30 19l-171 342c-11 22 5 49 31 49h559v102c0 19 15 34 34 34s34-15 34-34v-102h82c25 0 41-27 30-49z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'Furniture15'
);
