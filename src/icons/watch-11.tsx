
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M845 480h-10c-12-116-83-213-183-261v-126h-280v126c-109 52-186 163-186 293s77 241 186 293v126h280v-126c100-48 171-145 183-261h10c18 0 32-14 32-32s-14-32-32-32z m-333 265c-129 0-233-104-233-233 0-129 104-233 233-233s233 104 233 233c0 129-104 233-233 233z',
'M605 465h-46v-93c0-25-21-46-47-46s-47 21-47 46v140c0 26 21 47 47 47h93c26 0 47-21 47-47 0-26-21-47-47-47z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'Watch11'
);
