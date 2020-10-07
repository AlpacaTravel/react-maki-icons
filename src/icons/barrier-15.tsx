
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M887 205h-750a68 68 0 0 0-69 68v410a68 68 0 0 0 69 68h68v171a34 34 0 0 0 68 0v-35h478v35a34 34 0 0 0 68 0v-171h68a68 68 0 0 0 69-68v-410a68 68 0 0 0-69-68z m0 68v137l-136-137z m-238 0l238 239v171l-409-410z m-274 410l-238-239v-171l409 410z m-238 0v-137l136 137z m614 136h-478v-68h478z m-14-136h-88l-410-410h136l410 410z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Barrier15'
);
