
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M454 137c-83 0-148 94-173 124-5 6-8 14-8 22v300c-1 17 12 31 29 31 7 1 14-2 20-6 32-43 79-72 132-80 96 0 133 86 233 86 68-6 133-32 187-74 8-6 14-17 13-27v-346c2-16-9-31-26-33-5-1-11 0-16 3-46 35-100 60-158 72-100 1-133-72-233-72z m-283 68c-38 0-69-31-69-68s31-69 69-69 68 31 68 69-31 68-68 68z m34 68v647c0 19-15 34-34 34s-34-15-34-34v-647c0-19 15-34 34-34s34 15 34 34z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Embassy15'
);
