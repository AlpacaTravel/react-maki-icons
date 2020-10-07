
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M10.06,4.76c-1.1682,1.9568-2.5794,3.7577-4.2,5.36c-0.1865,0.1961-0.4967,0.2038-0.6927,0.0173	C5.1614,10.1316,5.1556,10.1259,5.15,10.12C3.5259,8.5183,2.1113,6.7173,0.94,4.76c-1.82-3.64,2.8-6.07,4.56-2.43
	C7.26-1.31,11.88,1.12,10.06,4.76z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Heart11'
);
