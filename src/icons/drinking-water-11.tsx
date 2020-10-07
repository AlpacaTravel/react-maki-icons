
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M465 1024h-186a47 47 0 0 1-46-37l-140-466a47 47 0 0 1 47-56h465a47 47 0 0 1 47 56l-139 466a47 47 0 0 1-48 37z m-208-279l229 0 62-186h-352z',
'M419 0h0a140 140 0 0 0-140 141v186a47 47 0 0 0 47 46h93a47 47 0 0 0 46-47v-93a47 47 0 0 1 47-47h419v-186h-512z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'DrinkingWater11'
);
