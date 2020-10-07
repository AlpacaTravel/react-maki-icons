
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M698 465l-158-94-93-122c-14-18-41-22-58-8-12 9-17 23-16 37h0v94h-187v-46c0-26-21-47-46-47s-47 21-47 47v46 93 94h326c93 0 140 93 233 93 96 0 279 0 279 0l0-47c0-52-233-140-233-140z',
'M515 706c-39-25-82-54-143-54h-279v137c0 27 22 49 49 49h181c27 0 49-22 49-49v-44c33 0 60 18 91 38 38 26 81 55 142 55h279c26 0 47-21 47-47v-46h-326c-32 0-59-18-90-39z'];

export default createSvgIcon(
  [<g key='s-0'><path key='s-0' d={paths[0]}/><path key='s-1' d={paths[1]}/></g>],
  'Shoe11'
);
