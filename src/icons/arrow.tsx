
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M566 157c27-27 70-27 97 0l307 307c27 26 27 70 0 96l-307 307c-27 27-70 27-97 0-27-26-27-69 0-96l185-191h-649c-37 0-68-30-68-68 0-38 31-68 68-68h649l-185-191c-27-27-27-70 0-96z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Arrow'
);
