
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M10,2h0V1.5a.5.5,0,0,0-1,0V2H5A1,1,0,0,0,4,3V13a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM6,13H5V12H6Zm0-2H5V10H6ZM6,9H5V8H6Zm2,4H7V12H8Zm0-2H7V10H8ZM8,9H7V8H8Zm2,4H9V12h1Zm0-2H9V10h1Zm0-2H9V8h1Zm0-2.5a.5.5,0,0,1-.5.5h-4A.5.5,0,0,1,5,6.5v-3A.5.5,0,0,1,5.5,3h4a.5.5,0,0,1,.5.5Z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'MobilePhone15'
);
