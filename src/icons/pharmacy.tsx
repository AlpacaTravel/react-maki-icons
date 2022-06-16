
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M649 273l73-105c4 0 8 0 12 0 47 0 85-38 85-85 0-48-38-86-85-86-47 0-86 39-86 86 0 1 1 1 1 2 0 0 0 5 0 7l-171 181h171z m170 137v-69h-614v69l102 239-102 238v69h614v-69l-68-238 68-239z m-136 273h-137v136h-68v-136h-137v-69h137v-136h68v136h137v69z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Pharmacy'
);
