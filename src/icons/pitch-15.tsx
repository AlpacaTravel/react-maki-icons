
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M5,3C4.4477,3,4,2.5523,4,2s0.4477-1,1-1s1,0.4477,1,1S5.5523,3,5,3z M12.5,10H10L9,7L8,5.25L9,5l2.3,1l0,0	c0.2761,0.1105,0.5895-0.0239,0.7-0.3S11.9761,5.1105,11.7,5l0,0L9,4H7L5,5L4,6H2.5C2.2239,6,2,6.2239,2,6.5S2.2239,7,2.5,7H5l1-1
	l1,2l-2,2v3.5C5,13.7761,5.2239,14,5.5,14S6,13.7761,6,13.5v-3.11L8,9l1,2h3.5c0.2761,0,0.5-0.2239,0.5-0.5S12.7761,10,12.5,10z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Pitch15'
);
