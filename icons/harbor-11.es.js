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

var harbor11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path5263', d: 'M5.5,0C4.1193,0,3,1.1193,3,2.5c0.0018,1.0981,0.7217,2.0466,1.75,2.3711V9.416 c-0.659-0.115-1.3381-0.3753-1.8926-0.8574C2.0886,7.8901,1.5,6.8297,1.5,5c0.0055-0.4226-0.3391-0.7664-0.7617-0.7598 C0.3248,4.2467-0.0054,4.5865,0,5c0,2.1703,0.7731,3.7349,1.873,4.6914S4.3333,11,5.5,11s2.527-0.3521,3.627-1.3086S11,7.1703,11,5 c0.0143-1.0142-1.5143-1.0142-1.5,0c0,1.8297-0.5886,2.8901-1.3574,3.5586C7.5881,9.0407,6.909,9.3011,6.25,9.416V4.875 C7.2795,4.55,7.9999,3.5995,8,2.5C8,1.1193,6.8807,0,5.5,0z M5.5,1.5c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1 S4.9477,1.5,5.5,1.5z' })], 'Harbor11');

export default harbor11;
