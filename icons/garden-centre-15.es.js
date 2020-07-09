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

var gardenCentre15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4,5L4,4.5C4,3.12 5.12,2 6.5,2C7.88,2 9,3.12 9,4.5L9,10.293L11.365,7.928L11.018,6.633C11.018,6.631 11.017,6.629 11.017,6.627L11.016,6.627L11.016,6.627C10.973,6.461 11.016,6.276 11.147,6.146C11.342,5.951 11.659,5.951 11.854,6.146L13.854,8.146C14.049,8.341 14.049,8.658 13.854,8.853C13.724,8.983 13.541,9.027 13.375,8.984C13.375,8.984 13.375,8.984 13.375,8.984C13.372,8.983 13.369,8.982 13.365,8.981L12.072,8.635L9,11.707L9,12C9,12.552 8.552,13 8,13L5,13C4.448,13 4,12.552 4,12L4,11.536L1.732,9.268C0.757,8.292 0.757,6.708 1.732,5.732C2.22,5.244 2.86,5 3.5,5L3.5,5L4,5ZM4,6L3.5,6L3.5,6C3.116,6 2.732,6.147 2.439,6.439C1.854,7.025 1.854,7.975 2.439,8.561L4,10.121L4,6ZM8,5L8,4.5C8,3.672 7.328,3 6.5,3C5.672,3 5,3.672 5,4.5L5,5L8,5Z' })], 'GardenCentre15');

export default gardenCentre15;
