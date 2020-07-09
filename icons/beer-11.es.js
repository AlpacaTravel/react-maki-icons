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

var beer11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M5.5,1c-2.3,0-3,0.66-3,0.66v2c0.0328,0.9197,0.2577,1.8223,0.66,2.65c0.376,0.9646,0.376,2.0354,0,3c0,0,0,0.66,2.32,0.66 S7.8,9.31,7.8,9.31c-0.376-0.9646-0.376-2.0354,0-3c0.4023-0.8277,0.6272-1.7303,0.66-2.65v-2C8.46,1.66,7.8,1,5.5,1z M5.5,9.28 C4.9736,9.3066,4.4465,9.2458,3.94,9.1c0.1326-0.4787,0.1999-0.9732,0.2-1.47h2.72c-0.0144,0.2198-0.0144,0.4402,0,0.66 C6.8939,8.5635,6.9474,8.8342,7.02,9.1C6.5269,9.2448,6.0136,9.309,5.5,9.29V9.28z M7.82,3.28c-1.5116,0.4425-3.1184,0.4425-4.63,0 L3.18,2c1.5151-0.4422,3.1249-0.4422,4.64,0c0,0,0.03,1.33,0,1.33L7.82,3.28z' })], 'Beer11');

export default beer11;
