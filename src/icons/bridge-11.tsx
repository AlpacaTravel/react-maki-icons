
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M0 543v295h93c0-103 84-187 186-187 103 0 186 84 186 187h94c0-103 83-187 186-187 102 0 186 84 186 187h93v-295c-272-375-802-328-1024 0z m186 16h-139c39-52 86-97 139-132v132z m186 0h-139v-162c43-23 92-43 139-54v216z m187 0h-140v-226c46-7 93-9 140-6v232z m186 0h-140v-226c48 8 95 22 140 41v185z m46 0v-162c73 40 137 95 186 162h-186z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Bridge11'
);
