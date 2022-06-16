
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M512 68a444 444 0 1 0 444 444 444 444 0 0 0-444-444z m177 194l-177 178-177-178a303 303 0 0 1 354 0z m-427 73l178 177-178 177a303 303 0 0 1 0-354z m73 427l177-178 177 178a303 303 0 0 1-354 0z m427-73l-178-177 178-177a303 303 0 0 1 0 354z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'PoliceJp'
);
