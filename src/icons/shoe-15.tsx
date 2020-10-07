
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M649 478c-29-16-61-41-90-65l-149-193c-13-17-37-20-53-7-9 6-14 16-15 26h-1v102h-122c-9 0-18-3-24-10 0 0-24-58-58-58s-35 0-35 0c-18 0-34 15-34 34v120 43 144h376c102 0 136 69 239 69s273 0 273 0v-34c0-103-236-131-307-171z',
'M649 751c-44 0-72-14-105-31-35-17-75-37-134-37h-308-34v102c0 19 16 34 34 34h273c19 0 35-15 35-34v-34c43 0 71 14 104 30 35 18 75 38 135 38h273c18 0 34-15 34-34v-34h-307z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'Shoe15'
);
