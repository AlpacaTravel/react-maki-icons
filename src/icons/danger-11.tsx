
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M616 791l290 145-42 82-352-175-352 176-42-83 290-145-289-144 42-83 351 175 352-176 41 84-289 144z m175-492v27l-93 93v93l-186 93-186-93v-93l-93-93v-47c-6-149 111-274 260-279 6 0 13 0 19 0 159 5 284 137 279 296 0 1 0 2 0 3z m-353-47c0-40-32-73-73-73s-74 33-74 73c0 41 33 74 74 74l0 0c41 0 73-33 73-74z m27 167h-46v93h46v-93z m140 0h-46v93h46v-93z m127-167c0-40-33-73-74-73s-73 33-73 73 33 74 73 74l0 0c41 0 74-33 74-74z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Danger11'
);
