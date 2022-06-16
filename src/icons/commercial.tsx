
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M956 478h-888c6-95 29-187 69-273h750c40 86 63 178 69 273z m-751 68h614v410h-68v-342h-205v342h-341v-410z m68 205h205v-137h-205v137z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Commercial'
);
