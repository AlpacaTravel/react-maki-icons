
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M887 546c0 226-149 410-375 410s-375-184-375-410c154 1 291 100 341 247v-315h-171c-56 0-102-46-102-103v-204c0-19 15-34 34-34 11 0 21 5 27 13l105 137 112-205c11-16 32-20 48-10 4 2 7 6 10 10l112 205 105-137c11-15 32-18 48-7 8 7 13 17 13 28v204c0 57-46 103-102 103h-171v315c50-147 187-246 341-247z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Garden'
);
