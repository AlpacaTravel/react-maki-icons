
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M341 205c-37 0-68-31-68-68s31-69 68-69 69 31 69 69-31 68-69 68z m512 478h-170l-69-205-68-120 68-17 157 69 0 0c19 7 41-2 48-21s-1-40-20-48l0 0-185-68h-136l-137 68-68 69h-102c-19 0-34 15-34 34s15 34 34 34h170l69-68 68 136-137 137v239c0 18 16 34 34 34s35-16 35-34v-213l136-95 68 137h239c19 0 34-15 34-34s-15-34-34-34z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Pitch15'
);
