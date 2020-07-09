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

var park11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M11,3.75C11,2.7835,10.2165,2,9.25,2c-0.2789,0.0012-0.5534,0.0698-0.8,0.2C8.4284,1.5308,7.8795,0.9997,7.21,1 C7.1386,1.0103,7.0683,1.027,7,1.05C6.9091,0.4341,6.3724-0.0168,5.75,0C5.2633,0.0026,4.8224,0.2874,4.62,0.73 C4.4366,0.6044,4.222,0.5317,4,0.52C3.5966,0.5282,3.223,0.7338,3,1.07C2.8417,1.0195,2.6761,0.9959,2.51,1 C1.6761,0.9991,0.9992,1.6743,0.9983,2.5083C0.9981,2.7043,1.036,2.8985,1.11,3.08C0.302,3.2358-0.2268,4.0171-0.071,4.8251 C0.0422,5.4122,0.4954,5.8748,1.08,6c0.2492,0.7843,1.087,1.218,1.8713,0.9688C3.2148,6.8851,3.4498,6.7297,3.63,6.52h0.12 c0.3212-0.0009,0.6295-0.1264,0.86-0.35V10L3,11h5l-1.6-1V9c0.6623-0.8086,1.4694-1.4868,2.38-2 c0.2593-0.0493,0.5009-0.1667,0.7-0.34l0,0l0,0C9.8179,6.3704,10.0086,5.9449,10,5.5c0.0033-0.0566,0.0033-0.1134,0-0.17 C10.6103,5.0405,10.9996,4.4255,11,3.75z M6.36,8.25V6h0.18c0.1812-0.0015,0.3607-0.0353,0.53-0.1 c0.1232,0.4546,0.4528,0.8249,0.89,1C7.375,7.2849,6.8378,7.7381,6.36,8.25z' })], 'Park11');

export default park11;
