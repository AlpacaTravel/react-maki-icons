
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M279 875a68 68 0 0 0 93 0l69-69a68 68 0 0 0 0-93z m425-428a68 68 0 0 0 93 0l66-66a68 68 0 0 0 0-93z m-157-115l-215 215a34 34 0 0 0 0 49l40 41-162 164a211 211 0 0 1-68-125v-93a125 125 0 0 1 49-93l299-299a125 125 0 0 1 93-49h93a211 211 0 0 1 125 68l-164 162-41-40a34 34 0 0 0-49 0'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Telephone11'
);
