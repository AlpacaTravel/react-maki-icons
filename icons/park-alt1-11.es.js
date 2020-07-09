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

var parkAlt111 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.571,8.563,7.425,6.424a.255.255,0,0,1-.069-.174A.25.25,0,0,1,7.6,6h.8a.25.25,0,0,0,.25-.25.246.246,0,0,0-.068-.165l-.008-.008L6.4,3.4a.27.27,0,0,1-.051-.149A.25.25,0,0,1,6.6,3H7.48a.257.257,0,0,0,.25-.258A.234.234,0,0,0,7.68,2.6L5.694.224A.223.223,0,0,0,5.343.186h0C5.327.2,3.352,2.578,3.352,2.578a.246.246,0,0,0-.068.164A.257.257,0,0,0,3.534,3H4.4a.25.25,0,0,1,.25.25.262.262,0,0,1-.066.17L2.431,5.571a.247.247,0,0,0-.077.178A.251.251,0,0,0,2.6,6h.789a.249.249,0,0,1,.25.249.3.3,0,0,1-.063.17L1.43,8.563A.253.253,0,0,0,1.6,9H5v1H6V9H9.4a.255.255,0,0,0,.249-.255A.248.248,0,0,0,9.571,8.563Z' })], 'ParkAlt111');

export default parkAlt111;
