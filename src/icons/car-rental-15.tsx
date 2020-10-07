
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M785 68h-102c-51 0-94 28-118 69h-326l-68 68 68 68 68-68 68 68 69-68 68 68h53c24 41 67 68 118 68h102c19 0 34-15 34-34v-205c0-19-15-34-34-34z m-34 171c0 19-15 34-34 34s-34-15-34-34v-68c0-19 15-34 34-34s34 15 34 34v68z',
'M746 615l-25-149c-5-33-33-56-67-56h-284c-33 0-62 23-67 56l-25 149c-41 2-73 35-73 77v195h68c0 38 31 69 68 69s69-31 69-69h204c0 38 31 69 69 69s68-31 68-69h68v-196c0-41-32-74-73-76z m-422 204c-28 0-51-23-51-51 0-28 23-51 51-51s51 23 51 51c0 28-22 51-51 51z m23-205l23-136 284-1 23 137h-330z m353 205c-29 0-51-23-51-51 0-28 22-51 51-51s51 23 51 51c0 28-23 51-51 51z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'CarRental15'
);
