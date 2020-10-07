
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M11.8,13.5V11c0.7-0.1,1.2-0.7,1.2-1.5S12.3,8,11.5,8S10,8.7,10,9.5c0,0.7,0.5,1.4,1.2,1.5v2.5H7V2H2v11.5H1V14h13v-0.5	H11.8z M6,11H3v-1h3V11z M6,9H3V8h3V9z M6,7H3V6h3V7z M6,5H3V4h3V5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ResidentialCommunity15'
);
