
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M751 102c0 57-46 103-102 103s-103-46-103-103 46-102 103-102 102 46 102 102z m0 649c-38 0-68 30-68 68s30 68 68 68 68-30 68-68-30-68-68-68z m126-335l-131-131 0 0c-6-7-15-12-25-12h-482c-19 0-34 15-34 34s15 34 34 34h184l-218 430 0 0c-1 5-1 10 0 14-4 19 8 37 27 41 19 4 37-8 41-27l0 0 68-116h137l-132 289 0 0c-3 5-5 12-5 18-3 19 9 37 28 41 18 4 37-9 41-27l0 0 320-641 99 101c14 12 36 11 48-4 11-13 11-32 0-44z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Soccer'
);
