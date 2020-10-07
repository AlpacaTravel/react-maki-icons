
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M819 341v-204c0 0-68-69-307-69s-307 69-307 69v204c2 95 25 189 68 273 43 98 43 210 0 308 0 0 0 68 239 68s239-68 239-68c-43-98-43-210 0-308 43-84 66-178 68-273z m-307 581c-54 2-109-4-161-20 14-49 21-100 20-151h282c-1 51 6 102 20 151-52 16-107 22-161 20z m0-581c-81 2-162-9-239-34v-136c77-25 158-36 239-34 81-2 162 9 239 34v136c-77 25-158 36-239 34z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Beer15'
);
