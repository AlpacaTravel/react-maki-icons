
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M478 444v-69c0-37-31-68-68-68s-69 31-69 68v205l137-136z m-161 277l24-516c0-38 31-68 69-68s68 30 68 68-31 68-68 68-69-30-69-68l-24 516z',
'M956 410l0 0c0 37-31 68-69 68h-107c-19 0-36 7-49 20l-370 370c-13 12-30 19-48 19h-176c-38 0-69-30-69-68l0 0c0-38 31-68 69-68h108c18 0 35-7 48-20l370-370c13-13 30-20 48-20h176c38 0 69 31 69 69z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'Entrance15'
);
