
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M12,5h-2V3H2v4c0.0133,2.2091,1.8149,3.9891,4.024,3.9758C7.4345,10.9673,8.7362,10.2166,9.45,9H12c1.1046,0,2-0.8954,2-2	S13.1046,5,12,5z M12,8H9.86C9.9487,7.6739,9.9958,7.3379,10,7V6h2c0.5523,0,1,0.4477,1,1S12.5523,8,12,8z M10,12.5
	c0,0.2761-0.2239,0.5-0.5,0.5h-7C2.2239,13,2,12.7761,2,12.5S2.2239,12,2.5,12h7C9.7761,12,10,12.2239,10,12.5z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Cafe15'
);
