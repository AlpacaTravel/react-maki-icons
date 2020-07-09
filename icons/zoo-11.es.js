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

var zoo11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M8,2C7.1,2,6.5,2.5,6.2,3.1C6.2,3.1,5.5,4,5,4H3C2.5,4,2,4.5,2,4.5l-2,2V7h0.5l1.2-1.2L1.9,6 C1.9,6,1,7.7,1,9c0,0.5,0.5,0.5,0.5,0.5H2c0,0,0.2,0,0-0.2L1.8,9.1c0-0.5,0.8-1.4,1.2-1.9c0,0,0,0.8,0,1.4 c0,0.3,0.1111,0.9,0.4111,0.9h0.5c0,0,0.2,0,0-0.2l-0.2-0.2C3.5111,8.7,4.3,7.5,4.3,7.5h1.8L6.6,9c0.2,0.5,0.5,0.5,0.5,0.5h1 c0.2,0,0.7-0.2,0.2-0.5L8.1,8.8V7l0,0c1,0,1.1-1.3,1.5-1.7l0.7-0.1c0.2,0,0.8-0.2,0.8-0.8V4L9.9,3l0,0C9.4,2.4,8.7,2,8,2z' })], 'Zoo11');

export default zoo11;
