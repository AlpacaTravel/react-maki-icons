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

var danger11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M6.62,8.5l3.11,1.55l-0.45,0.89L5.5,9.06l-3.78,1.89l-0.45-0.89L4.38,8.5l-3.1-1.55l0.45-0.89L5.5,7.94l3.78-1.89l0.44,0.9 L6.62,8.5z M8.5,3.21V3.5l-1,1v1l-2,1l-2-1v-1l-1-1V3C2.4438,1.3994,3.6958,0.0562,5.2964,0C5.3643-0.0024,5.4322-0.0024,5.5,0 c1.7059,0.0484,3.0495,1.4705,3.0011,3.1764C8.5008,3.1876,8.5004,3.1988,8.5,3.21z M4.71,2.71c0-0.4363-0.3537-0.79-0.79-0.79 S3.13,2.2737,3.13,2.71c0,0.4363,0.3537,0.79,0.79,0.79l0,0C4.3563,3.5,4.71,3.1463,4.71,2.71z M5,4.5H4.5v1H5V4.5z M6.5,4.5H6v1 h0.5V4.5z M7.86,2.71c0-0.4363-0.3537-0.79-0.79-0.79S6.28,2.2737,6.28,2.71S6.6337,3.5,7.07,3.5l0,0 C7.5063,3.5,7.86,3.1463,7.86,2.71z' })], 'Danger11');

export default danger11;
