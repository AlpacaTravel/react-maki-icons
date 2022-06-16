
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M1017 915l-437-874c-27-55-102-55-129 0l-444 874c-27 48 13 109 68 109h874c55 0 89-61 68-109z m-505-28c-55 0-102-47-102-102s41-102 102-102 102 47 102 102c0 62-47 102-102 102z m68-273h-136l-34-239c0-20 13-34 34-34h136c21 0 34 14 34 34l-34 239z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Caution'
);
