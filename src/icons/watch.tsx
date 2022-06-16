
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M853 478h-34a29 29 0 0 0-3 1 306 306 0 0 0-133-222v-155a34 34 0 0 0-34-34h-274a34 34 0 0 0-34 34v155a307 307 0 0 0 0 510v155a34 34 0 0 0 34 34h274a34 34 0 0 0 34-34v-155a306 306 0 0 0 133-222 29 29 0 0 0 3 1h34a34 34 0 0 0 0-68z m-341 273a239 239 0 1 1 239-239 239 239 0 0 1-239 239z m102-273h-68v-103a34 34 0 0 0-68 0v137a34 34 0 0 0 34 34h102a34 34 0 0 0 0-68z'];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Watch'
);
