
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M818 647l-49-49a340 340 0 1 1-480-479l-49-49a409 409 0 0 0 238 713v104h-34a34 34 0 0 0 0 69h136a34 34 0 0 0 0-69h-34v-104a408 408 0 0 0 272-136z m-306-33a239 239 0 1 0-239-239 239 239 0 0 0 239 239z m68-341l25-40a171 171 0 0 1 56 61l-12 47h-69z m-126-58l58 58v68l34 69h133a170 170 0 0 1-103 123l-30-55h-102l-99-137a171 171 0 0 1 109-126z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Globe'
);
