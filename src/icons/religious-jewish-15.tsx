
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M15,12H9.78L7.5,15l-2.26-3H0l2.7-4L0,4h5.3l2.2-4l2.34,4H15l-2.56,4L15,12z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ReligiousJewish15'
);
