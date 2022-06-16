
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M480 82l-335 375c-5 6-8 13-8 21-1 7 2 14 6 20l335 441c4 5 9 10 15 12 6 3 12 5 19 5 7 0 13-2 19-5 6-2 11-7 15-12l335-441c4-6 7-13 6-20 0-8-3-15-8-21l-335-375c-4-4-9-8-15-10-5-3-11-4-17-4-6 0-12 1-17 4-6 2-11 6-15 10z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Diamond'
);
