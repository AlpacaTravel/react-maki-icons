
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M717 692c-46 33-101 49-157 45h-129v219h-130v-615h268c53-2 105 14 147 47 40 39 60 92 55 147 8 58-13 116-54 157z m-103-221c-19-14-43-22-68-20h-115v180h115c25 2 49-6 68-21 18-19 27-43 25-69 3-26-6-52-25-70z m370-184c8-17 0-37-17-45l-455-211-458 211c-17 8-25 29-17 46 8 17 28 24 46 16l0 0 429-198 429 198c17 8 37 0 45-17h-2z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ParkingGarage'
);
