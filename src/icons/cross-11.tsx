
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M205 111l307 307 307-306c12-13 29-19 47-19 35 2 63 30 65 65 0 17-7 33-19 45l-308 309 308 309c12 12 19 28 19 45-2 35-30 63-65 65-18 0-35-6-47-19l-307-306-306 306c-13 13-29 19-47 19-36-2-64-30-66-66 0-17 7-33 19-45l308-308-309-309c-12-12-18-28-18-45 2-35 30-63 65-65 18-1 34 6 47 18z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Cross11'
);
