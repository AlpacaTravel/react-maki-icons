
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M559 465l-187-93-186 93-93 187v279l140 0v-186h279v186l140 0v-279z m-94 187h-186v-140h186v140z',
'M931 186a93 93 0 0 0-186 0v745h186v-745z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>,<path key='s-1' d={paths[1]}/>],
  'Farm11'
);
