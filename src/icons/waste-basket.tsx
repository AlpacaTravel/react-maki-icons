
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M847 381l-91 546c-3 16-17 28-34 28h-420c-17 0-31-12-34-28l-91-546c-3-19 9-36 28-39 2-1 4-1 5-1h603c19 0 34 15 35 34 0 2 0 4-1 6z m40-142c0 19-15 34-34 34h-682c-19 0-34-15-34-34s15-34 34-34h170v-103c0-18 16-34 34-34h274c18 0 34 16 34 34v103h170c19 0 34 15 34 34z m-273-34v-68h-204v68h204z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'WasteBasket'
);
