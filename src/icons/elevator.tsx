
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M751 68h-478a68 68 0 0 0-68 69v750a68 68 0 0 0 68 69h478a68 68 0 0 0 68-69v-750a68 68 0 0 0-68-69z m-239 785l-137-273h274z m-137-409l137-273 137 273z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Elevator'
);
