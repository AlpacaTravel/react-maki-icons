
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M945 468l-85-79-75-150a72 72 0 0 0-61-34h-424a72 72 0 0 0-61 34l-75 150-85 79a34 34 0 0 0-11 25v292a34 34 0 0 0 34 34h137c14 0 34-13 34-27v-41h478v34c0 14 14 34 27 34h144a34 34 0 0 0 34-34v-292a34 34 0 0 0-11-25z m-638-195h410l68 137h-546z m34 314c0 14-20 27-34 27h-143c-14 0-27-20-27-34v-75c6-20 20-34 40-27l137 27c14 0 27 21 27 34z m546-7c0 14-13 34-27 34h-143c-14 0-34-13-34-27v-48c0-13 13-34 27-34l137-27c20-7 34 7 40 27z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Car'
);
