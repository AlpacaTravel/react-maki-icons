
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M512 93c-214 0-279 62-279 62v186c3 85 24 169 61 246 35 90 35 190 0 280 0 0 0 61 216 61s216-61 216-61c-35-90-35-190 0-280 38-77 58-161 62-246v-186c0 0-62-62-276-62z m0 771c-49 2-98-3-145-17 12-44 18-90 18-137h254c-2 21-2 41 0 62 3 25 8 50 14 75-45 14-93 20-141 18v-1z m216-559c-141 42-290 42-431 0l-1-119c141-41 291-41 432 0 0 0 3 124 0 124l0-5z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Beer11'
);
