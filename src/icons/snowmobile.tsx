
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M1024 751a68 68 0 0 1-68 68l0 0v0h-313a68 68 0 0 1-49-20l-106-106a34 34 0 0 0-24-10h-236a68 68 0 0 1-41-14l-92-69a69 69 0 0 1-27-54 68 68 0 0 1 32-58l241-147 71-115h0a34 34 0 0 1 66 13v239l68 68h68l370-68a34 34 0 0 1 24 63l-121 73 112 84a68 68 0 0 1 25 53z m-649 0h-155a205 205 0 0 1-98-25l-71-39a34 34 0 0 0-33 60l86 47a205 205 0 0 0 99 25h172a34 34 0 0 0 0-68z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Snowmobile'
);
