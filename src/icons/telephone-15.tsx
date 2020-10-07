
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M308 606a35 35 0 0 0 0 49l49 50-147 148-26-25a153 153 0 0 1-47-98v-99a153 153 0 0 1 47-99l346-346a153 153 0 0 1 99-49h99a153 153 0 0 1 99 49l25 24-148 149-50-50a35 35 0 0 0-49 0z m-26 322a68 68 0 0 0 96 3q2-1 3-3l49-49a68 68 0 0 0 3-96q-2-2-3-3z m495-497a68 68 0 0 0 96 3c1-1 52-52 52-52a68 68 0 0 0 2-96q-1-1-2-3z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Telephone15'
);
