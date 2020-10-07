
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M6.554,9.639a.5.5,0,0,0,.707.707L9.928,7.669a.25.25,0,0,0,0-.354h0L7.261,4.639a.5.5,0,0,0-.707.707L8.2,7H1.5a.5.5,0,0,0,0,1H8.2ZM12,1H5.5a.5.5,0,0,0,0,1h6a.5.5,0,0,1,.5.5v10a.5.5,0,0,1-.5.5H5.25a.5.5,0,0,0,0,1H12a1,1,0,0,0,1-1V2A1,1,0,0,0,12,1Z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'EntranceAlt115'
);
