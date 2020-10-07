
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M410 68a137 137 0 0 0-137 137v239a34 34 0 0 0 34 34h137a34 34 0 0 0 34-34v-137a34 34 0 0 1 34-34h444v-205h-546z',
'M478 1024h-205a34 34 0 0 1-33-26l-103-410a34 34 0 0 1 34-42h409a34 34 0 0 1 34 42l-102 410a34 34 0 0 1-34 26z m-229-273l253 0 35-137h-323z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'DrinkingWater15'
);
