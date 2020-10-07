
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M5.44,8.17c0.7156,0.0006,1.414-0.2194,2-0.63C7.9037,7.8634,8.4391,8.0693,9,8.14h0.44L8,13.7	c-0.1082,0.2541-0.4019,0.3723-0.656,0.264C7.2252,13.9134,7.1306,13.8188,7.08,13.7L5.44,8.17z`

  ,`M11.44,4.67c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2l0,0l0,0l0,0c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2h0.12	C5.1756,1.6345,5.7035,0.4834,6.739,0.099s2.1866,0.1435,2.571,1.179c0.1667,0.449,0.1667,0.9429,0,1.3919h0.13
	C10.5446,2.67,11.44,3.5654,11.44,4.67z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'IceCream15'
);
