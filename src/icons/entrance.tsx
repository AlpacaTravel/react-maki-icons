
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M478 444v-69a68 68 0 0 0-137 0v205z m-137-239a68 68 0 1 1 69 68 68 68 0 0 1-69-68m615 205h0a68 68 0 0 1-69 68h-107a68 68 0 0 0-49 20l-370 370a68 68 0 0 1-48 19h-176a68 68 0 0 1-69-68h0a68 68 0 0 1 69-68h108a68 68 0 0 0 48-20l370-370a68 68 0 0 1 48-20h176a68 68 0 0 1 69 69z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Entrance'
);
