
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M887 273h-273l0-205-102-68-102 68v205h-273l-69 68v69h888v-69l-69-68z m-375-171c27 0 48 21 48 55s-21 48-48 48-55-21-55-55c0-27 28-48 55-48z m375 376h-750v273l-69 102v103h888v-103l-69-102v-273z m-546 375h-68v-307h68v307z m205 0h-68v-307h68v307z m205 0h-68v-307h68v307z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'TownHall'
);
