
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M826 202a204 204 0 0 0-349 134l215 214a204 204 0 0 0 134-348z m-507 361l-145 145a68 68 0 0 0 0 97l48 48a68 68 0 0 0 97 0l145-145 145-144-145-145z m51 143l-49-48 143-143 48 49z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Karaoke'
);
