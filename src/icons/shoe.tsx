
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M649 478a681 681 0 0 1-90-65l-149-193a38 38 0 0 0-68 19h-1v102h-122a34 34 0 0 1-24-10s-24-58-58-58h-35a34 34 0 0 0-34 34v307h376c102 0 136 69 239 69h273v-34c0-103-236-131-307-171z m0 273a214 214 0 0 1-105-31 280 280 0 0 0-134-37h-342v102a34 34 0 0 0 34 34h273a34 34 0 0 0 35-34v-34a214 214 0 0 1 104 30 280 280 0 0 0 135 38h273a34 34 0 0 0 34-34v-34z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Shoe'
);
