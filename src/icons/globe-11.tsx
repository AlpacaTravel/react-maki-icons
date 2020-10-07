
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = ['M605 931h-46v-98c96-11 184-53 249-118l-49-49c-63 63-151 102-247 102-192 0-349-157-349-349 0-96 39-184 102-247l-49-49c-76 75-123 180-123 296 0 215 163 391 372 414v98h-46c-26 0-47 21-47 46 0 26 21 47 47 47h186c26 0 47-21 47-47 0-25-21-46-47-46z',
'M512 652c129 0 233-105 233-233 0-129-104-233-233-233s-233 104-233 233c0 128 104 233 233 233z m-51-411l46 57v78l57 103h123c-16 46-48 83-91 105l-84-72h-93l-90-123c11-72 64-129 132-148z'];

export default createSvgIcon(
  [<g key='s-0'><g key='s-0'><path key='s-0' d={paths[0]}/></g><g key='s-1'><path key='s-0' d={paths[1]}/></g></g>],
  'Globe11'
);
