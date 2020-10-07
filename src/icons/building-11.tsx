
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M2,1v9h4V6h2v4h1V1H2z M5,9H3V6h2V9z M5,5H3V3h2V5z M8,5H6V3h2V5z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Building11'
);
