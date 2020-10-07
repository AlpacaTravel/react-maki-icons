
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M1,9H3a.979.979,0,0,1-1,1A.979.979,0,0,1,1,9ZM9.753,4H9V3h.351a.282.282,0,0,0,.223-.148l.268-.536a.333.333,0,0,0,.009-.066A.25.25,0,0,0,9.6,2H9V1.5H6.25a.25.25,0,0,0,0,.5H8V4.5L5,7H4V5.5A.5.5,0,0,0,3.5,5H3V4H4.75A.25.25,0,0,0,5,3.75a.245.245,0,0,0-.223-.239V3.5L1.25,3A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4H2V5H1.5a.5.5,0,0,0-.5.5V8H6.172a1,1,0,0,0,.709-.294L7.3,7.292A1,1,0,0,1,8,7H9.752A.248.248,0,0,0,10,6.752v-2.5A.247.247,0,0,0,9.753,4ZM9,8a1,1,0,1,0,1,1A1,1,0,0,0,9,8Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Scooter11'
);
