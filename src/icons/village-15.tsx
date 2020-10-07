
import React from 'react';
import createSvgIcon from '../utils/create-svg-icon';

export const paths:string[] = [
  `M6.176,4.176a.249.249,0,0,0-.352,0l-4.4,4.4A.25.25,0,0,0,1.6,9H3v4.751A.249.249,0,0,0,3.249,14h3.5A.249.249,0,0,0,7,13.753H7V8.323a.249.249,0,0,1,.073-.176L8.5,6.5ZM6,12H5V11H6Zm0-2H5V9H6Zm6.75-4h-.5a.25.25,0,0,0-.25.25V8L10.676,6.176a.249.249,0,0,0-.352,0L8.056,8.932A.246.246,0,0,0,8,9.088v4.66A.249.249,0,0,0,8.246,14h1.5A.253.253,0,0,0,10,13.748h0V12h1v1.747a.253.253,0,0,0,.253.253h1.5A.25.25,0,0,0,13,13.751V6.25A.25.25,0,0,0,12.75,6ZM10,11H9V10h1Zm2,0H11V10h1Z`
];

export default createSvgIcon(
  [<path key='s-0' d={paths[0]}/>],
  'Village15'
);
