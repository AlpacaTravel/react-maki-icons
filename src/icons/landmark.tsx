
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M853 819h-34v-34c0-20-13-34-34-34h-34v-341h68l68-137c-68 7-136 7-204 0-55-41-96-82-137-136v-35c0-20-14-34-34-34s-34 14-34 34v35c-41 54-82 95-137 136-68 7-136 7-204 0l68 137h68v341c0 0-34 0-34 0-21 0-34 14-34 34v34h-34c-21 0-34 14-34 34v34h750v-34c0-20-13-34-34-34z m-375-68h-137v-341h137v341z m205 0h-137v-341h137v341z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Landmark'
);
