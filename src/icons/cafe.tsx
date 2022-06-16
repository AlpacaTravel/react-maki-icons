
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M819 341h-136v-136h-546v273c0 151 123 272 274 271 97 0 185-52 234-135h174c76 0 137-61 137-136s-61-137-137-137z m0 205h-146c6-22 9-45 10-68v-68h136c38 0 68 30 68 68s-30 68-68 68z m-136 307c0 19-16 34-34 34h-478c-19 0-34-15-34-34s15-34 34-34h478c18 0 34 15 34 34z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Cafe'
);
