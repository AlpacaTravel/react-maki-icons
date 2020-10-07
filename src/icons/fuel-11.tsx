
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M9.5,3H9V1.5l0,0C9,1.2239,8.7761,1,8.5,1S8,1.2239,8,1.5l0,0V3c0,0.5523,0.4477,1,1,1v4.25C9,8.3881,8.8881,8.5,8.75,8.5	S8.5,8.3881,8.5,8.25V6.5C8.5,5.6716,7.8284,5,7,5V2c0-0.5523-0.4477-1-1-1H2C1.4477,1,1,1.4477,1,2v7c0,0.5523,0.4477,1,1,1h4
	c0.5523,0,1-0.4477,1-1V6c0.2761,0,0.5,0.2239,0.5,0.5v1.75c0,0.6904,0.5596,1.25,1.25,1.25S10,8.9404,10,8.25V3.5
	C10,3.2239,9.7761,3,9.5,3z M6,4.5C6.0056,4.7706,5.7908,4.9944,5.5202,5C5.5201,5,5.5201,5,5.52,5h-3
	C2.2384,5.0056,2.0056,4.7818,2,4.5002C2,4.5001,2,4.5001,2,4.5l0,0V3c0-0.2761,0.2239-0.5,0.5-0.5h3C5.7761,2.5,6,2.7239,6,3V4.5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Fuel11'
);
