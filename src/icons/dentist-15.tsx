
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M4.36,14c-1,0-0.56-2.67-0.86-5c-0.1-0.76-1-1.49-1.12-2.06C2,5,1.39,1.44,3.66,1S6,3,7.54,3s1.57-2.36,3.85-2	s1.59,3.9,1.29,5.9c-0.1,0.45-1.1,1.48-1.18,2.06c-0.33,2.4,0.32,5-0.8,5c-0.93,0-1.32-2.72-2-4.5C8.43,8.63,8.06,8,7.54,8
	C6,8,5.75,14,4.36,14z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Dentist15'
);
