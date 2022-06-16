
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M887 341h-341v-164c13-7 23-18 29-31l347-44c18 0 34-15 34-34s-16-34-34-34l-357 45c-12-17-32-27-53-28-28 0-52 17-63 43l-347 43c-18 0-34 15-34 34s16 34 34 34l357-45c5 7 11 13 19 17v164h-341c-38 0-69 31-69 69v477c0 38 31 69 69 69h750c38 0 69-31 69-69v-477c0-38-31-69-69-69z m-409 410h-273v-273h273v273z m341 0h-273v-273h273v273z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Aerialway'
);
