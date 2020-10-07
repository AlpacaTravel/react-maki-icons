
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M180 87l332 331 330-330c12-12 28-20 45-20 38 0 69 31 69 69 0 16-7 33-19 45l-334 330 334 334c12 11 18 26 19 41 0 38-31 69-69 69-17 0-34-6-47-19l-328-331-331 331c-12 12-28 19-44 19-38 0-69-31-69-69 0-16 7-33 19-45l334-330-334-334c-12-11-18-26-19-41 0-38 31-69 69-69 16 0 32 7 43 19z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Cross15'
);
