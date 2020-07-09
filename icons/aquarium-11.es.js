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

var aquarium11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path3338', d: 'M8,1C7.1243,1,6.1491,1.092,4.9961,1.5273 C3.8431,1.9622,2.8479,2.6569,2,3.5C1.1477,4.3474,0,6,0,6.5s1.1354,1.9426,2.6777,2.6211 c1.5424,0.6784,2.3909,0.7983,3.2832,0.8945c0.7968,0.086,1.9424-0.027,2.8848-0.2324C9.5925,9.6205,10.9937,9.3099,11,9 c0,0-2.7561-0.063-3-0.5c-0.2486-0.4448-0.2494-1.5858,0-2c0.258-0.4283,2.5,1,2.5,1c0.6439,0.2576,0.6439-4.2576,0-4 c0,0-2.2768,1.4474-2.5,1C7.7506,4,7.7506,3,8,2.5C8.2232,2.0526,11,2,11,2C11,1.5,8.8757,1,8,1z M3.5137,4.502 c0.5598,0.0001,1.0136,0.4539,1.0137,1.0137C4.5272,6.0754,4.0735,6.5292,3.5137,6.5293C2.9539,6.5292,2.5001,6.0754,2.5,5.5156 C2.5001,4.9558,2.9539,4.5021,3.5137,4.502z' })], 'Aquarium11');

export default aquarium11;
