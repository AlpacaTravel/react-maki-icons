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

var waterfall11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.9,2H11V1H4C2.4,1,1,2.2,1,3.9c0,0,0,0,0,0c0,0,0,3.4,0,3.4C0,7.8-0.3,9,0.3,10c0.6,1,1.8,1.3,2.7,0.7 c0.7,0.4,1.7,0.3,2.3-0.2c1.4,0.9,3.2,0.6,4.2-0.8c0.9-1.4,0.6-3.2-0.8-4.2C8.5,5.4,8.2,5.3,8,5.2V4C8,2.9,8.8,2,9.9,2z M9,8 c0,1.1-0.9,2-2,2c-1,0-1.1-0.3-1.3-0.5H4.9C4.7,9.7,4.5,10,4,10S3.3,9.8,3.2,9.5H2.8C2.7,9.8,2.4,10,2,10c-0.6,0-1-0.4-1-1 s0.4-1,1-1V7V5c0,0,0-0.5,0.5-0.5S3,5,3,5v2.5C3,7.5,3,8,3.5,8S4,7.5,4,7.5V6c0,0,0-0.5,0.5-0.5S5,6,5,6v1.5C5,7.5,5,8,5.5,8 S6,7.5,6,7.5V5c0,0,0-0.5,0.5-0.5S7,5,7,5v1C8.1,6,9,6.9,9,8z' })], 'Waterfall11');

export default waterfall11;
