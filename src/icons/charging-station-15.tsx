
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M13,4V2.49C12.9946,2.2178,12.7723,1.9999,12.5,2c-0.2816,0.0047-0.5062,0.2367-0.5015,0.5184	C11.9987,2.5289,11.9992,2.5395,12,2.55V5c0,0.5523,0.4477,1,1,1v5.5c0,0.2761-0.2239,0.5-0.5,0.5S12,11.7761,12,11.5v-2
	C12,8.6716,11.3284,8,10.5,8H9V2c0-0.5523-0.4477-1-1-1H2C1.4477,1,1,1.4477,1,2v11c0,0.5523,0.4477,1,1,1h6c0.5523,0,1-0.4477,1-1
	V9h1.5C10.7761,9,11,9.2239,11,9.5v2c0,0.8284,0.6716,1.5,1.5,1.5c0.8284,0,1.5-0.6716,1.5-1.5V5C14,4.4477,13.5523,4,13,4z
	 M7.2004,7.3995l-2.6006,3.4674l-0.0164-0.0072C4.5369,10.9384,4.4667,11,4.3688,11c-0.1476,0-0.2672-0.1196-0.2672-0.2672
	c0-0.028,0.0217-0.0463,0.0297-0.0717l-0.0177-0.0078l0.7766-2.3245C4.9442,8.1671,4.8238,8,4.6533,8H2.9994
	C2.7936,8,2.6762,7.7651,2.7996,7.6005l2.6006-3.4674l0.0164,0.0072C5.4631,4.0616,5.5333,4,5.6312,4
	c0.1476,0,0.2672,0.1196,0.2672,0.2672c0,0.028-0.0217,0.0463-0.0297,0.0717l0.0176,0.0078L5.1099,6.6711
	C5.0558,6.8329,5.1762,7,5.3467,7h1.6539C7.2064,7,7.3238,7.2349,7.2004,7.3995z`

];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'ChargingStation15'
);
