
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M512 47a465 465 0 1 0 465 465 465 465 0 0 0-465-465z m191 203l-191 191-191-191a320 320 0 0 1 382 0z m-453 71l191 191-191 191a320 320 0 0 1 0-382z m71 453l191-191 191 191a320 320 0 0 1-382 0z m453-71l-191-191 191-191a320 320 0 0 1 0 382z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'PoliceJp11'
);
