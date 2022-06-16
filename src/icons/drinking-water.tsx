
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M410 68a137 137 0 0 0-137 137v239a34 34 0 0 0 34 34h137a34 34 0 0 0 34-34v-137a34 34 0 0 1 34-34h444v-205z m68 956h-205a34 34 0 0 1-33-26l-103-410a34 34 0 0 1 24-41 38 38 0 0 1 10-1h409a34 34 0 0 1 35 33 32 32 0 0 1-1 9l-102 410a34 34 0 0 1-34 26z m-229-273h253l35-137h-323z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'DrinkingWater'
);
