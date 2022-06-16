
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M820 853h170l-171 171v-170a111 111 0 0 1-77 33 109 109 0 0 1-68-23 463 463 0 0 1 0-704 110 110 0 0 1 145 8v-168l171 171h-168a109 109 0 0 1 8 8 111 111 0 0 1-20 156 240 240 0 0 0-76 177 243 243 0 0 0 78 178 112 112 0 0 1 16 156c-2 3-5 5-8 7z m-649-853l-68 375c-10 55 121 81 119 137l-17 444a66 66 0 0 0 68 68 66 66 0 0 0 69-68l-17-444c-3-56 118-81 119-137l-68-375h-34l17 273-52 34-17-307h-34l-17 307-51-34 17-273z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'RestaurantBbq'
);
