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

var baseball15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10,3.5C10,4.3284,9.3284,5,8.5,5S7,4.3284,7,3.5S7.6716,2,8.5,2S10,2.6716,10,3.5z M7,0.28C7,0.1254,6.8746,0,6.72,0 c0,0,0,0,0,0C6.6221,0.0262,6.5348,0.0821,6.47,0.16L4,4.59C3.9941,4.6331,3.9941,4.6769,4,4.72C4,4.8746,4.1254,5,4.28,5 c0.1015-0.0243,0.1926-0.0803,0.26-0.16L7,0.41C7.006,0.3669,7.006,0.3231,7,0.28z M12.9,14.2L12.9,14.2L10,6.39l0,0 C9.9526,6.1627,9.7522,5.9999,9.52,6h-5c-0.2761,0-0.5,0.2239-0.5,0.5S4.2439,7,4.52,7H7l1.45,2.51l-4.27,4.61l0,0 C4.0659,14.2132,3.9998,14.3527,4,14.5C4,14.7761,4.2239,15,4.5,15c0.1224-0.0006,0.2401-0.047,0.33-0.13l0,0l4.45-4.15l2.76,4l0,0 c0.0895,0.1592,0.2574,0.2584,0.44,0.26c0.2796,0.0002,0.5092-0.2207,0.52-0.5C12.9958,14.3787,12.961,14.281,12.9,14.2z' })], 'Baseball15');

export default baseball15;
