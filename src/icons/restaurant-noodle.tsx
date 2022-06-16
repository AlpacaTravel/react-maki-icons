
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M304 818l-236-272v-68h888v68l-239 272z m-32-647a34 34 0 0 0-68 0v38l-123 25a17 17 0 1 0 7 34l116-19v39l-119 2a17 17 0 0 0 0 34l119 3v82h68z m649 102l-512 18v-87l518-73a34 34 0 0 0-13-67l-506 104a34 34 0 0 0-67 3v15l-34 7v24l34-5v81l-34 1v32l614 15a34 34 0 0 0 0-68z m-238 614h-342v40h342z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'RestaurantNoodle'
);
