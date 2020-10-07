
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M884 186h-744a47 47 0 0 0-47 47v372a47 47 0 0 0 47 47h46v232a47 47 0 0 0 93 0v-46h466v46a47 47 0 0 0 93 0v-232h46a47 47 0 0 0 47-47v-372a47 47 0 0 0-47-47z m-698 93h140l279 280h-186l-233-233z m0 280v-140l140 140z m93 186v-93h466v93z m559-186h-140l-279-280h186l233 233z m0-140l-140-140h140z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Barrier11'
);
