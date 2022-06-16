
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M538 784a35 35 0 0 0 49 0l49-49 149 148-26 25a153 153 0 0 1-98 48h-98a153 153 0 0 1-99-48l-347-346a153 153 0 0 1-49-99v-99a153 153 0 0 1 49-99l25-25 149 148-50 50a35 35 0 0 0 0 49z m322 26a68 68 0 0 0 2-96h0l-2-3-49-49a68 68 0 0 0-97-2h0l-2 2z m-497-495a68 68 0 0 0 2-96h0l-51-52a68 68 0 0 0-97-2h0l-3 2z m320-178v136h-137v68h137v137h68v-137h136v-68h-136v-136z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'EmergencyPhone'
);
