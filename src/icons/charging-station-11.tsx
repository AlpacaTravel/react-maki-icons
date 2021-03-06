
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M884 279h-46v-139c0-26-21-47-47-47s-46 21-46 47v139c0 52 41 93 93 93v396c0 13-11 23-23 23s-24-10-24-23v-163c0-77-62-140-139-140v-279c0-51-42-93-93-93h-373c-51 0-93 42-93 93v652c0 51 42 93 93 93h373c51 0 93-42 93-93v-279c25 0 46 20 46 46v163c0 64 52 116 117 116s116-52 116-116v-442c0-26-21-47-47-47z m-558 536h-47l93-256h-209l256-350h46l-93 256h210l-256 350z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ChargingStation11'
);
