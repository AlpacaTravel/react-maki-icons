
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M956 444v375c0 38-31 68-69 68h-750c-38 0-69-30-69-68v-375c0-19 16-34 34-34 5-1 10-1 15 0l0 0 395 273 396-273 0 0c4-1 9-1 14 0 18 0 34 15 34 34z m-871-176l0 0 6 5 421 273 423-273 0 0h4l0 0c12-7 19-20 17-34 0-19-16-34-34-34h-820c-18 0-34 15-34 34 0 12 7 23 17 29z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Post'
);
