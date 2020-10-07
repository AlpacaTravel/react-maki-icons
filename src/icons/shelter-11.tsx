
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M4,5v3h6v2H2l0,0l0,0V5.67L1,6V4l9-3v2L4,5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Shelter11'
);
