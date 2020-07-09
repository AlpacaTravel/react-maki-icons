import React from 'react';
import PropTypes from 'prop-types';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function createSvgIcon(children, name) {
  // Props
  var size = Number(name.replace(/[^\d]+/, ""));

  // Build the component to return
  var Component = function Component(props, ref) {
    return React.createElement(
      SvgIconComponent,
      _extends({ ref: ref }, props, { size: size }),
      children
    );
  };

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = name;
  }

  return React.memo(React.forwardRef(Component));
}

var SvgIcon = function SvgIcon(props, ref) {
  var _props$size = props.size,
      size = _props$size === undefined ? 11 : _props$size;
  var style = props.style,
      className = props.className,
      htmlColor = props.htmlColor,
      _props$component = props.component,
      Component = _props$component === undefined ? "svg" : _props$component,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === undefined ? "0 0 " + size + " " + size : _props$viewBox,
      children = props.children,
      titleAccess = props.titleAccess,
      other = objectWithoutProperties(props, ["style", "className", "htmlColor", "component", "viewBox", "children", "titleAccess"]);


  return React.createElement(
    Component,
    _extends({
      className: className,
      style: style,
      viewBox: viewBox,
      focusable: false,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? "img" : undefined,
      color: htmlColor,
      ref: ref
    }, other),
    children,
    titleAccess ? React.createElement(
      "title",
      null,
      titleAccess
    ) : null
  );
};

var SvgIconComponent = React.forwardRef(SvgIcon);

SvgIcon.propTypes = {
  style: PropTypes.any,
  className: PropTypes.string,
  component: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  children: PropTypes.any
};

SvgIcon.defaultProps = {
  style: null,
  children: null,
  component: null,
  className: null
};

var restaurantSeafood11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'restaurant-seafood-11' },
  React.createElement('path', { key: 's-0', d: 'M8.478,7.1855H9.9722v.6H8.6465A3.3857,3.3857,0,0,1,9.6982,9.3311L9.13,9.5244A2.7584,2.7584,0,0,0,7.87,7.9763L6.3715,8.9914,4.53,8.9744,3.0376,8.0105A2.7482,2.7482,0,0,0,1.832,9.5244l-.5683-.1933A3.3857,3.3857,0,0,1,2.3154,7.7852H.99v-.6H2.4882a.539.539,0,0,1,.0727-.081l.7122-.6387-.7-1.1433c-.0146,0-.0246.0048-.04.0048,0,0-1.5334,0-1.5334-1.4445A4.9644,4.9644,0,0,1,2.5334.994L2,3V4H3l.9918-2.006v2a1.4231,1.4231,0,0,1-.7024,1.159l.5132.838.132-.1184a2.5517,2.5517,0,0,1,3.11,0l.116.1043.5148-.8381A1.4264,1.4264,0,0,1,7.0072,3.994v-2L8,4H9V3L8.4656.994A4.9682,4.9682,0,0,1,9.994,3.8828c0,1.4445-1.5284,1.4445-1.5284,1.4445-.0294,0-.05-.0083-.0777-.0094L7.6907,6.4531l.6729.6049A.5511.5511,0,0,1,8.478,7.1855Z' })
)], 'RestaurantSeafood11');

export default restaurantSeafood11;
