
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M922 887h-205v-273h205a34 34 0 0 0 28-53l-154-220h57a34 34 0 0 0 27-56l-171-204a35 35 0 0 0-53 0l-170 204a34 34 0 0 0 26 56h57l-153 220a34 34 0 0 0 28 53h205v273h-376v-136h102a34 34 0 0 0 0-68h-273a34 34 0 0 0 0 68h103v136h-103a34 34 0 0 0 0 69h820a34 34 0 0 0 0-69z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'HighwayRestArea'
);
