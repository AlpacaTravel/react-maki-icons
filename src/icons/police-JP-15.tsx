
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M7.5,1A6.5,6.5,0,1,0,14,7.5,6.5,6.5,0,0,0,7.5,1Zm2.6,2.84L7.5,6.44,4.9,3.84A4.4428,4.4428,0,0,1,10.1,3.84ZM3.84,4.9007,6.4394,7.5l-2.6,2.5993A4.4429,4.4429,0,0,1,3.84,4.9007ZM4.9,11.16l2.6-2.6,2.6,2.6A4.4428,4.4428,0,0,1,4.9,11.16Zm6.26-1.0606L8.5606,7.5l2.6-2.5993a4.4429,4.4429,0,0,1-.0006,5.1986Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'PoliceJp15'
);
