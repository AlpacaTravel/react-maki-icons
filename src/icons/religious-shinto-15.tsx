
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M12.5,2.5H2.5a.9448.9448,0,0,0-1,1,.9448.9448,0,0,0,1,1H3V12a.9448.9448,0,0,0,1,1,.9448.9448,0,0,0,1-1V8h5v4a.9448.9448,0,0,0,1,1,.9448.9448,0,0,0,1-1V4.5h.5a.9448.9448,0,0,0,1-1,.9448.9448,0,0,0-1-1ZM10,6H8V4.5h2ZM7,6H5V4.5H7Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ReligiousShinto15'
);
