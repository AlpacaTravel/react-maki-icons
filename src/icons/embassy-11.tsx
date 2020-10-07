
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M512 186c-84 7-163 42-224 99-6 6-9 14-9 22v309c-1 18 13 33 30 34 9 0 17-3 23-9 52-39 115-61 180-62 103 0 126 73 233 73 64-7 124-34 170-79 10-6 16-17 16-29v-323c3-18-9-35-27-38-7-1-14 0-20 3-40 33-88 55-139 63-107 0-126-63-233-63z m-372-46c51 0 93 41 93 93s-42 93-93 93-93-42-93-93 41-93 93-93z m46 279v558c0 26-21 47-46 47s-47-21-47-47v-558c0-26 21-47 47-47s46 21 46 47z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Embassy11'
);
