
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M186 680c28-19 47-47 47-75 0-37-19-65-56-84v-111l335 149 512-233-512-233-512 233 112 46v149c-38 19-56 47-56 84 0 28 18 56 46 75l-46 158c-28 93 46 93 46 93h93c0 0 75 0 47-93l-56-158z',
'M326 577c0 9 0 19 0 28 0 37-19 75-37 102 18 38 37 75 37 131v56c46 18 112 37 186 37 233 0 326-140 326-140v-279l-326 149-186-84z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'College11'
);
