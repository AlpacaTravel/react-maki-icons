
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M580 683c31 41 81 68 137 68 94 0 170-76 170-171 0-38-13-73-34-102l0 0-341-410-341 410 0 0c-21 29-34 64-34 102 0 95 76 171 170 171 56 0 106-27 137-68 7-9 20-27 34-46v148c0 102-171 102-171 102-19 0-34 16-34 35 0 18 15 34 34 34h171 68 171c19 0 34-16 34-34 0-19-15-35-34-35 0 0-171 0-171-102v-148c14 19 27 37 34 46z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Casino'
);
