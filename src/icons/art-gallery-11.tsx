
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M8.21,3L5.85,0.65C5.6555,0.4539,5.339,0.4526,5.1429,0.6471C5.1419,0.6481,5.141,0.649,5.14,0.65L2.79,3H1.5	C1.2239,3,1,3.2239,1,3.5v6C1,9.7761,1.2239,10,1.5,10h8C9.7761,10,10,9.7761,10,9.5v-6C10,3.2239,9.7761,3,9.5,3H8.21z M5.5,1.71
	L6.79,3H4.21L5.5,1.71z M9,9H2V4h7V9z M4.5,5.5C4.5,5.7761,4.2761,6,4,6S3.5,5.7761,3.5,5.5S3.7239,5,4,5S4.5,5.2239,4.5,5.5z M8,8
	H4l0.75-1.5l0.5,1L6.5,5L8,8z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ArtGallery11'
);
