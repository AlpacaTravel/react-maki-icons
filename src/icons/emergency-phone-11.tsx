
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M8.87,8.53a.73.73,0,0,0,0-1l-.74-.74a.73.73,0,0,0-1,0ZM4.27,3.97a.73.73,0,0,0,0-1l-.71-.71a.73.73,0,0,0-1,0ZM3.04,5.65,5.35,7.96a.37.37,0,0,0,.52,0l.44-.43L8.07,9.27A2.27,2.27,0,0,1,6.73,10h-1a1.345,1.345,0,0,1-1-.52L1.52,6.27a1.345,1.345,0,0,1-.52-1v-1a2.27,2.27,0,0,1,.73-1.34L3.47,4.69l-.43.44a.37.37,0,0,0,0,.52M8,2.5H6.5v1H8V5H9V3.5h1.5v-1H9V1H8Z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'EmergencyPhone11'
);
