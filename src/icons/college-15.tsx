
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M512 68l-512 239 137 62v116c-41 13-69 54-69 95s28 82 69 96v7l-62 143c-20 61-7 130 96 130s116-69 95-130l-61-143c41-21 68-55 68-103s-27-82-68-95v-82l307 143 512-239-512-239z m300 444l-307 137-164-76v7c0 48-20 89-54 123l41 96v7c7 27 13 54 7 81 47 21 102 35 170 35 225 0 307-137 307-205l0-205 0 0z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'College15'
);
