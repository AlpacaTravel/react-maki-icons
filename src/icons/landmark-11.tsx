
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M9.5,9H8V5h1l1-2C9.3,3.1,8.7,3.1,8,3C7.3,2.7,6.6,2.4,6,2V1.5C6,1.2,5.8,1,5.5,1S5,1.2,5,1.5V2C4.4,2.4,3.7,2.7,3,3	C2.3,3.1,1.7,3.1,1,3l1,2h1v4H1.5C1.2,9,1,9.2,1,9.5S1.2,10,1.5,10h8C9.8,10,10,9.8,10,9.5S9.8,9,9.5,9z M7,9H4V5h3V9z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Landmark11'
);
