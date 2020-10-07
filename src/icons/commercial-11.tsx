
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M0 465c-2-101 31-199 93-279h838c62 80 95 178 93 279h-1024z m186 94v465h373v-372h186v372h93v-465h-652z m279 279h-186v-186h186v186z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Commercial11'
);
