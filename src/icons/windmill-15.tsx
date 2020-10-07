
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M6,5L3.5,7.5l1,1L7,6V5.5L7.5,5L8,5.5V6l2.5,2.5l1-1L9,5H8.5L8,4.5L8.5,4H9l2.5-2.5l-1-1L8,3v0.5L7.5,4L7,3.5V3L4.5,0.5	l-1,1L6,4h0.5L7,4.5L6.5,5H6z M11.5,13h-1l-1-4l-2-2l-2,2l-1,4h-1C3.2239,13,3,13.2238,3,13.5C3,13.7761,3.2239,14,3.5,14h8
	c0.2761,0,0.5-0.2239,0.5-0.5C12,13.2238,11.7761,13,11.5,13z M8,13H7v-1.5024C7,11.2228,7.2228,11,7.4976,11
	C7.7751,11,8,11.2249,8,11.5024V13z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Windmill15'
);
