
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M0 604v283h137v-68c2-74 62-134 136-136 74 2 134 62 137 136v68h204v-68c3-74 63-134 137-136 74 2 134 62 136 136v68h137v-283c-300-394-814-304-1024 0z m649-213c35 9 69 20 102 35v188h-102v-223z m-35-6v229h-102v-238c34 0 69 3 102 9z m-375 57c33-17 67-31 102-41v213h-102v-172z m136 172v-223c34-8 68-13 103-15v238h-103z m-170-154v154h-171c46-61 105-114 171-154z m580 154v-170l-4-4c83 41 154 101 209 174h-205z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Bridge'
);
