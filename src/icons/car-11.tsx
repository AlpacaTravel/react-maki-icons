
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M838 372l-83-247c-6-19-24-32-44-32h-398c-20 0-38 13-44 32l-83 247c-51 0-93 42-93 93v280h93v93c0 51 42 93 93 93s93-42 93-93v-93h280v93c0 51 41 93 93 93s93-42 93-93v-93h93v-280c0-51-42-93-93-93z m-559 280c-51 0-93-42-93-93s42-94 93-94 93 42 93 94-41 93-93 93z m0-280l58-186h350l58 186h-466z m466 280c-52 0-93-42-93-93s41-94 93-94 93 42 93 94-42 93-93 93z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Car11'
);
