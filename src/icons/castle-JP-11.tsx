
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M1.75,9.5029a.75.75,0,0,1-.75-.75V4.748a.75.75,0,0,1,.75-.75L3.001,3.997V2.247a.75.75,0,0,1,.75-.75h3.5a.75.75,0,0,1,.75.75v1.75l1.25.001a.75.75,0,0,1,.75.75v4a.75.75,0,0,1-1.5,0V5.498l-1.25-.001a.75.75,0,0,1-.75-.75V2.997h-2v1.75a.75.75,0,0,1-.75.75L2.5,5.498V8.7529A.75.75,0,0,1,1.75,9.5029Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'CastleJp11'
);
