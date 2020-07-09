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

var museum15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path7509', d: 'M7.5,0L1,3.4453V4h13V3.4453L7.5,0z M2,5v5l-1,1.5547V13h13v-1.4453L13,10 V5H2z M4.6152,6c0.169-0.0023,0.3318,0.0639,0.4512,0.1836L7.5,8.6172l2.4336-2.4336c0.2445-0.2437,0.6402-0.2432,0.884,0.0013 C10.9341,6.3017,10.9997,6.46,11,6.625v4.2422c0.0049,0.3452-0.271,0.629-0.6162,0.6338c-0.3452,0.0049-0.629-0.271-0.6338-0.6162 c-0.0001-0.0059-0.0001-0.0118,0-0.0177V8.1328L7.9414,9.9414c-0.244,0.2433-0.6388,0.2433-0.8828,0L5.25,8.1328v2.7344 c0.0049,0.3452-0.271,0.629-0.6162,0.6338C4.2887,11.5059,4.0049,11.2301,4,10.8849c-0.0001-0.0059-0.0001-0.0118,0-0.0177V6.625 C4,6.2836,4.2739,6.0054,4.6152,6z' })], 'Museum15');

export default museum15;
