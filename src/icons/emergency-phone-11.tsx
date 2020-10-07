
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M826 794a68 68 0 0 0 0-93l-69-69a68 68 0 0 0-93 0z m-429-424a68 68 0 0 0 0-94l-66-66a68 68 0 0 0-93 0z m-114 156l215 215a34 34 0 0 0 48 0l41-40 164 162a211 211 0 0 1-124 68h-94a125 125 0 0 1-93-48l-299-299a125 125 0 0 1-48-93v-94a211 211 0 0 1 68-124l162 164-40 41a34 34 0 0 0 0 48m462-293h-140v93h140v139h93v-139h139v-93h-139v-140h-93z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'EmergencyPhone11'
);
