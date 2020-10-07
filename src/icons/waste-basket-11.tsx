
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M9,4l-1.17,7H3.17L2,4H9z M9.25,2.25C9.25,2.3881,9.1381,2.5,9,2.5H2c-0.1381,0-0.25-0.1119-0.25-0.25S1.8619,2,2,2h2V0h3	v0.5l0,0V2h2C9.1381,2,9.25,2.1119,9.25,2.25z M6.5,2V0.5h-2V2H6.5z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'WasteBasket11'
);
