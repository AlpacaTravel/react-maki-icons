
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M205 478c0 34 0 341 0 341 0 41 27 68 68 68h410c41 0 68-27 68-68 0 0 0-307 0-341 0-137-205-478-273-478s-273 341-273 478z m136 273v-205c0-205 137-375 137-375s136 170 136 375v205h-273z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'FerryJp'
);
