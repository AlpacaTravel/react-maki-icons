
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M910 410h-125l-27-159c-10-49-47-89-96-102-24-8-48-12-74-12h-152c-26 0-50 4-74 12-49 13-86 53-96 102l-27 159h-125c-19-1-34 15-34 34 0 3 0 7 1 10l129 430 0 0c13 43 53 72 97 72h410c44-1 83-30 97-72l0 0 128-430c6-18-4-37-22-43-3-1-7-1-10-1z m-601 0l24-149c6-24 26-43 51-47 16-6 34-9 52-9h152c18 0 36 3 53 9 25 4 45 23 51 47l23 149h-409 3z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Shop'
);
