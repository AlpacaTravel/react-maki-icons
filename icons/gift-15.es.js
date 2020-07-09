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

var gift15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M6.5,5v2H0V5H6.5z M8.5,5v2H15V5H8.5z M1,8v4.5C1,13.3284,1.6716,14,2.5,14h4V8H1z M8.5,8v6h4c0.8284,0,1.5-0.6716,1.5-1.5 V8H8.5z M10.5,0c-1.4033-0.0444-2.6497,0.8904-3,2.25C7.1497,0.8904,5.9033-0.0444,4.5,0c-1.0709-0.0337-1.9663,0.8072-2,1.8781 C2.4987,1.9187,2.4987,1.9594,2.5,2C2.3443,2.9427,2.9822,3.8331,3.9249,3.9888C4.0853,4.0153,4.2486,4.0191,4.41,4h6.13 c0.9548,0.1497,1.8503-0.5029,2-1.4577c0.0282-0.1797,0.0282-0.3626,0-0.5423c0.0002-1.1046-0.895-2.0002-1.9996-2.0004 C10.5269-0.0004,10.5135-0.0003,10.5,0z M4.5,3c-0.506,0.0463-0.9537-0.3264-1-0.8323C3.4949,2.1119,3.4949,2.0558,3.5,2 C3.4537,1.494,3.8264,1.0463,4.3323,1C4.3881,0.9949,4.4442,0.9949,4.5,1c1.1046,0,2,0.8954,2,2H4.5z M10.5,3h-2 c0-1.1046,0.8954-2,2-2c0.5523,0,1,0.4477,1,1c0.0463,0.506-0.3264,0.9537-0.8323,1C10.6119,3.0051,10.5558,3.0051,10.5,3z' })], 'Gift15');

export default gift15;
