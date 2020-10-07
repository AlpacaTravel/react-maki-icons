
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M307 410l-307 68v-34l307-69v35z m0-171l-307-68v34l307 68v-34z m410 0v34l307-68v-34l-307 68z m0 171l307 68v-34l-307-69v35z m-171 68v-341h171c19 3 37-9 41-28 4-19-9-37-28-41l-204-68c-9-4-19-4-28 0l-205 68c-19 4-31 22-27 41s22 31 41 28h171v341h-137l-136 478h614l-136-478h-137z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Lighthouse15'
);
