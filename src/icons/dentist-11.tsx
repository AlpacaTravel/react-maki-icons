
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M5.48,6C4.857,6.0823,4.3088,6.4527,4,7c-0.46,1.21-0.14,3-0.82,3S2.7,8.49,2.5,7C2.2864,6.3547,2.0326,5.7235,1.74,5.11	C1.53,3.7,1,1.28,2.67,1S4.35,2.52,5.5,2.52S6.67,0.72,8.33,1s1.14,2.7,0.93,4.11C8.9674,5.7235,8.7136,6.3547,8.5,7
	c-0.2,1.49,0,3-0.68,3S7.46,8.21,7,7C6.6912,6.4527,6.143,6.0823,5.52,6l0,0H5.48z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Dentist11'
);
