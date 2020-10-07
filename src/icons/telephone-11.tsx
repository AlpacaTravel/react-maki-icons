
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M3,9.4a0.73,0.73,0,0,0,1,0l0.74-.74a0.73,0.73,0,0,0,0-1ZM7.56,4.8a0.73,0.73,0,0,0,1,0l0.71-.71a0.73,0.73,0,0,0,0-1ZM5.88,3.57L3.57,5.88a0.37,0.37,0,0,0,0,.52L4,6.84,2.26,8.6a2.27,2.27,0,0,1-.73-1.34v-1a1.3452,1.3452,0,0,1,.52-1L5.26,2.05a1.3452,1.3452,0,0,1,1-.52h1a2.27,2.27,0,0,1,1.34.73L6.84,4,6.4,3.57a0.37,0.37,0,0,0-.52,0`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Telephone11'
);
