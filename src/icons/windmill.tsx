
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M410 341l-171 171 68 68 171-170v-35l34-34 34 34v35l171 170 68-68-171-171h-34l-34-34 34-34h34l171-171-68-68-171 171v34l-34 34-34-34v-34l-171-171-68 68 171 171h34l34 34-34 34h-34z m375 546h-68l-68-273-137-136-137 136-68 273h-68c-19 0-34 16-34 35 0 18 15 34 34 34h546c19 0 34-16 34-34 0-19-15-35-34-35z m-239 0h-68v-102c0-19 15-34 34-34 19 0 34 15 34 34v102z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Windmill'
);
