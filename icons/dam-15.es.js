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

var dam15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.94,9.5c0,0.2761-0.2239,0.5-0.5,0.5l0,0c-0.259,0.0219-0.4994,0.1439-0.67,0.34c-0.2714,0.2887-0.6175,0.4964-1,0.6 c-0.6115,0.1816-1.2734,0.0424-1.76-0.37l-0.39-0.35c-0.2976-0.3038-0.7851-0.3087-1.0889-0.0111 C8.5274,10.2126,8.5237,10.2163,8.52,10.22c-0.14,0.12-0.27,0.25-0.42,0.37c-0.7278,0.5784-1.7663,0.5489-2.46-0.07L5.3,10.19 l-0.1-0.06l0.3,1.22l0.49,2c0.0829,0.2634-0.0634,0.5441-0.3267,0.6271C5.6105,13.9937,5.5553,14.0014,5.5,14h-4 C1.2239,14,1,13.7761,1,13.5v-12C1,1.2239,1.2239,1,1.5,1h1.1c0.2346-0.0011,0.4384,0.1611,0.49,0.39L4,5.06V5.2 c0.6569-0.314,1.4361-0.2205,2,0.24c0.16,0.13,0.31,0.28,0.47,0.41c0.2847,0.2546,0.7153,0.2546,1,0c0.16-0.13,0.31-0.28,0.47-0.41 c0.7076-0.5968,1.7424-0.5968,2.45,0c0.15,0.13,0.29,0.27,0.44,0.39c0.2847,0.2546,0.7153,0.2546,1,0l0.47-0.41 c0.3163-0.2672,0.7159-0.4157,1.13-0.42l0,0c0.2761,0,0.5,0.2239,0.5,0.5S13.7061,6,13.43,6l0,0 c-0.259,0.0219-0.4994,0.1439-0.67,0.34c-0.2714,0.2887-0.6175,0.4964-1,0.6C11.1485,7.1216,10.4866,6.9824,10,6.57L9.67,6.23 C9.3724,5.9262,8.8849,5.9213,8.5811,6.2189C8.5774,6.2226,8.5737,6.2263,8.57,6.23C8.43,6.35,8.3,6.48,8.15,6.6 C7.4222,7.1784,6.3837,7.1489,5.69,6.53L5.3,6.19c-0.2847-0.2546-0.7153-0.2546-1,0L4.24,6.24L4.93,9 C5.3226,9.029,5.6965,9.1793,6,9.43c0.16,0.13,0.31,0.28,0.47,0.41c0.2847,0.2546,0.7153,0.2546,1,0c0.16-0.13,0.31-0.28,0.47-0.41 c0.7076-0.5968,1.7424-0.5968,2.45,0c0.15,0.13,0.29,0.27,0.44,0.39c0.2847,0.2546,0.7153,0.2546,1,0l0.47-0.41 c0.3177-0.2636,0.7172-0.4085,1.13-0.41l0,0c0.2761-0.0055,0.5044,0.2138,0.5099,0.4899C13.94,9.4933,13.94,9.4966,13.94,9.5z' })], 'Dam15');

export default dam15;