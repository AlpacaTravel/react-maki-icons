
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M372 186c-51 0-93-41-93-93s42-93 93-93 93 42 93 93-41 93-93 93z m605 559h-139l-93-280-93-162 93-24 214 93 0 0c26 10 54-4 63-29 9-26-4-54-30-64l0 0-247-93h-186l-187 93-93 93h-142c-26 0-47 21-47 47s21 46 47 46h235l93-93 94 187-187 93v325c0 26 21 47 47 47s46-21 46-47v-289l187-36 93 186h232c26 0 47-21 47-47s-21-46-47-46z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Pitch11'
);
