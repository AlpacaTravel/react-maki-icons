
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M512 0l-419 186v93h838v-93l-419-186z m-326 372v373l-93 93v93h838v-93l-93-93v-373h-652z m93 93h93v280h-93v-280z m186 0h94v280h-94v-280z m187 0h93v280h-93v-280z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'TownHall11'
);
