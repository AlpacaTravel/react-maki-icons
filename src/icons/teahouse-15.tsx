
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M11,7c-0.2,1.4-0.5,2.7-1,4c-0.3,0.4-0.6,0.7-1,1v2H6v-2c-0.4-0.3-0.7-0.6-1-1C4.5,9.7,4.2,8.4,4,7H11z M8.1,5.7	c1.2-0.3,1.7-0.3,1.8-1.5c0-0.6-0.4-0.8-1.5-1.4C7.5,2.4,7.1,1.8,7.2,1C6.8,1.9,7,3,8,3.5C10,4.5,8.1,5.7,8.1,5.7z M5.8,6
	c0.7-0.2,1.1-0.2,1.1-0.9c0-0.4-0.3-0.5-0.9-0.9C5.4,4,5.1,3.5,5.2,3C4.9,3.6,5.1,4.3,5.7,4.6C6.9,5.2,5.8,6,5.8,6z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Teahouse15'
);
