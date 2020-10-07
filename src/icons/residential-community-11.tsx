
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M8.8,8C9.5,7.9,10,7.2,10,6.5C10,5.7,9.3,5,8.5,5S7,5.7,7,6.5C7,7.2,7.5,7.9,8.2,8v1.5H6.4H6V1H2v8.5H1V10h1h4.4h1.9h0.5H10	V9.5H8.8V8z M3,2h2v1H3V2z M3,4h2v1H3V4z M3,6h2v1H3V6z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ResidentialCommunity11'
);
