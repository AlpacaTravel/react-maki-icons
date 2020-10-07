
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M15,11a1,1,0,0,1-1,1l0,0v0H9.4142a1,1,0,0,1-.7071-.2929L7.146,10.146A.4984.4984,0,0,0,6.7935,10H3.3343a1.0023,1.0023,0,0,1-.6015-.2006L1.3857,8.7888A1.0134,1.0134,0,0,1,1,8a.9953.9953,0,0,1,.4719-.8444L5,5,6.0385,3.3076h0A.5.5,0,0,1,7,3.5V7L8,8H9l5.4115-.9922a.5.5,0,0,1,.3555.915L13,9l1.6313,1.2243A.99.99,0,0,1,15,11ZM5.5,11H3.2247a3.0035,3.0035,0,0,1-1.44-.3679L.74,10.0612a.5.5,0,0,0-.48.8775l1.2687.6934A3.0032,3.0032,0,0,0,2.969,12H5.5a.5.5,0,0,0,0-1Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Snowmobile15'
);
