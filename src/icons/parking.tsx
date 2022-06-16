
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M809 571c-65 49-145 73-226 69h-188v316h-190v-888h390c77-4 153 20 214 69 57 55 86 133 78 213 9 82-20 163-78 221z m-143-318c-29-22-65-32-101-30h-170v261h170c37 2 72-9 101-32 26-27 38-64 35-101 4-37-9-73-35-98z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Parking'
);
