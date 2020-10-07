
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M7.5,1c-2,0-7,0.25-6.5,0.75L7,8v4	c0,1-3,0.5-3,2h7c0-1.5-3-1-3-2V8l6-6.25C14.5,1.25,9.5,1,7.5,1z M7.5,2c2.5,0,4.75,0.25,4.75,0.25L11.5,3h-8L2.75,2.25
	C2.75,2.25,5,2,7.5,2z`
];

export default createSvgIcon(
  [<path key='s-0' id='path4' d={paths[0]}/>],
  'Bar15'
);
