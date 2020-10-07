
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M4.5,6L0,7V6.5l4.5-1V6z M4.5,3.5L0,2.5V3l4.5,1V3.5z M10.5,3.5V4L15,3V2.5L10.5,3.5z M10.5,6L15,7V6.5l-4.5-1V6z M8,7V2	h2.5c0.2761,0.0552,0.5448-0.1239,0.6-0.4c0.0552-0.2761-0.1239-0.5448-0.4-0.6l-3-1C7.5696-0.0586,7.4204-0.0586,7.29,0l-3,1
	c-0.2761,0.0552-0.4552,0.3239-0.4,0.6S4.2139,2.0552,4.49,2H7v5H5l-2,7h9l-2-7H8z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Lighthouse15'
);
