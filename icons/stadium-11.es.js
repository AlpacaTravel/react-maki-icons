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

var stadium11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path4177', d: 'M5,0v3v0.0117 C2.7922,3.1089,1.0876,3.8182,1,4.6816c0,0,0,2.4594,0,3.6816C0.9995,9.2672,3.0143,10,5.5,10s4.5005-0.7328,4.5-1.6367V4.6816 C9.9122,3.8177,8.2093,3.1082,6,3.0117V2.5723L8.5,1.5L5,0z M1.8184,5.752C2.1366,5.9302,2.5373,6.0838,3,6.2051v2.459 C2.2493,8.4283,1.8213,8.0972,1.8184,7.75V5.752z M9.1816,5.7559V7.75C9.1803,8.0979,8.7521,8.4298,8,8.666V6.2031 C8.4614,6.0836,8.862,5.932,9.1816,5.7559z M4,6.3984C4.4815,6.4652,4.9888,6.4995,5.5,6.5C6.0112,6.4995,6.5185,6.4652,7,6.3984 v2.4922C6.5282,8.9624,6.0171,8.9997,5.5,9C4.9829,8.9997,4.4718,8.9624,4,8.8906V6.3984z' })], 'Stadium11');

export default stadium11;
