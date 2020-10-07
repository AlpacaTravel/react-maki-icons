
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M8,9.5v-5C8,4.2,7.8,4,7.5,4H6V1L3,2v7.5H2V10h7V9.5H8z M5,9.5H4V3h1V9.5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'BuildingAlt111'
);
