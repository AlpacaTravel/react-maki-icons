
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M4,2C3.4477,2,3,1.5523,3,1s0.4477-1,1-1s1,0.4477,1,1S4.5523,2,4,2z M10.5,8H9L8,5L7,3.25L8,3l2.3,1l0,0	c0.2761,0.0994,0.5806-0.0439,0.68-0.32c0.0994-0.2761-0.0439-0.5806-0.32-0.68l0,0L8,2H6L4,3L3,4H1.47
	c-0.2761,0-0.5,0.2239-0.5,0.5S1.1939,5,1.47,5H4l1-1l1,2L4,7v3.5C4,10.7761,4.2239,11,4.5,11S5,10.7761,5,10.5V7.39L7,7l1,2h2.5
	C10.7761,9,11,8.7761,11,8.5S10.7761,8,10.5,8z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Pitch11'
);
