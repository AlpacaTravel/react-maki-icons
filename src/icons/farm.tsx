
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M546 478l-205-137-204 137-69 136v273h137v-136h273v136h136v-273z m-136 136h-137v-136h137v136z m546 273h-205v-648a102 102 0 0 1 205 0v648z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Farm'
);
