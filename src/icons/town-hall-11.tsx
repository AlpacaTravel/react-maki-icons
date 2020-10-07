
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M5.5,0L1,2v1h9V2L5.5,0z M2,4v4L1,9v1h9V9L9,8V4H2z M3,5h1v3H3V5z M5,5h1v3H5V5z M7,5h1v3H7V5z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'TownHall11'
);
