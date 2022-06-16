
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M163 610l-93-42a959 959 0 0 1 528-500l2 5 35 91 0 0a861 861 0 0 0-472 446z m749 338l-679-305a792 792 0 0 1 434-411l0 0 56 145c-2 0-3-1-5-1a72 72 0 1 0 52 122l165 429a17 17 0 0 1-23 21z m-337-366a63 63 0 1 0-63 63 63 63 0 0 0 63-63z m206 138a63 63 0 1 0-63 63 63 63 0 0 0 63-63z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'RestaurantPizza'
);
