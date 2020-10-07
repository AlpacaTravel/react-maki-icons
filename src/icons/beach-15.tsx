
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M5.3608,1.67l-.01,4.02a4.4523,4.4523,0,0,0-1.1-.11c-.37.1-.74.63-1.1.76A4.2019,4.2019,0,0,1,5.3608,1.67Zm2.41-.64,2.03,3.45a3.1832,3.1832,0,0,1,.84-.61c.36-.1.94.17,1.34.11A4.2018,4.2018,0,0,0,7.7708,1.03ZM1.0008,13h13c-.66-.66-2.64-1.11-4.34-1.33l-1.87-7c.52-.05,1.15.03,1.53,0l-2.11-3.6h-.01a6.1743,6.1743,0,0,0-.7.14,4.3792,4.3792,0,0,0-.64.22l-.01,4.15c.35-.17.84-.54,1.3-.74l1.8,6.74c-.58-.05-1.09-.08-1.45-.08C6.0308,11.5,2.0008,12,1.0008,13Z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Beach15'
);
