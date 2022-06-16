
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M366 114l-1 274a304 304 0 0 0-75-7c-25 7-50 43-75 52a287 287 0 0 1 151-319z m164-44l139 236a217 217 0 0 1 57-42c25-7 65 12 92 8a287 287 0 0 0-288-202z m-462 817h888c-45-45-180-75-296-90l-128-478c35-4 78 2 104 0l-144-246h0a421 421 0 0 0-48 10 299 299 0 0 0-44 15l-1 283c24-12 58-37 89-51l123 461c-40-4-74-6-99-6-100 0-375 34-444 102z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Beach'
);
