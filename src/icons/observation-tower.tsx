
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M819 853h-34l-102-239v-136c68 0 68-51 68-51l34-222c0 0 0-34-34-34h-68c0 0 0-34-34-34h-69v-35c0 0 0-68-68-68-68 0-68 68-68 68v35h-69c-34 0-34 34-34 34h-68c-34 0-34 34-34 34l34 222c0 0 0 51 68 51v136l-102 239h-34c0 0-68 0-68 52 0 51 68 51 68 51h614c0 0 68 0 68-51 0-52-68-52-68-52z m-119-614l-17 102h-342l-17-102 376 0z m-120 239v68h-136v-68h136z m-136 170h136l69 205h-274l69-205z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ObservationTower'
);
