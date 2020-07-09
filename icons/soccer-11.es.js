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

var soccer11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9,1.25C8.9996,1.9404,8.4397,2.4997,7.7494,2.4994S6.4996,1.9391,6.5,1.2487C6.5004,0.5584,7.0603-0.001,7.7506-0.0006 C7.7638-0.0006,7.7769-0.0004,7.79,0C8.4647,0.0216,9.0003,0.575,9,1.25z M9,8.48c-0.5523,0-1,0.4477-1,1s0.4477,1,1,1s1-0.4477,1-1 S9.5523,8.48,9,8.48z M10.81,5.09L8.94,3.18l0,0C8.8477,3.0648,8.7076,2.9984,8.56,3H1.51c-0.2761,0-0.5,0.2239-0.5,0.5 S1.2339,4,1.51,4H5L2.07,8.3l0,0c-0.0138,0.066-0.0138,0.134,0,0.2C2.012,8.7761,2.1889,9.047,2.465,9.105 C2.7411,9.163,3.012,8.9861,3.07,8.71H3L4.16,7H6l-1.93,3.24l0,0C4.0228,10.3184,3.9986,10.4085,4,10.5 c-0.0552,0.2761,0.1239,0.5448,0.4,0.6c0.2761,0.0552,0.5448-0.1239,0.6-0.4l0,0l3.67-6.38l1.48,1.48 c0.1812,0.2084,0.497,0.2305,0.7054,0.0493c0.2084-0.1812,0.2305-0.497,0.0493-0.7054C10.8879,5.1246,10.8696,5.1065,10.85,5.09 L10.81,5.09z' })], 'Soccer11');

export default soccer11;
