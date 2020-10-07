
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M3.695,1.1a.256.256,0,0,0-.4,0L1.055,3.931A.254.254,0,0,0,1,4.088V9.75a.25.25,0,0,0,.25.25h1.5A.25.25,0,0,0,3,9.75V8H4V9.75a.25.25,0,0,0,.25.25H5V5.5a.615.615,0,0,1,.147-.4L6,4ZM3,7H2V6H3ZM3,5H2V4H3ZM8.194,3.742a.248.248,0,0,0-.387,0L6.054,5.932A.249.249,0,0,0,6,6.087V9.752A.248.248,0,0,0,6.248,10h3.5A.248.248,0,0,0,10,9.756h0V6.087a.249.249,0,0,0-.054-.155ZM7,6H8V7H7ZM9,9H8V8H9Z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Town11'
);
