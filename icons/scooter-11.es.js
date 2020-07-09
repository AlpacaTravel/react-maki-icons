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

var scooter11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1,9H3a.979.979,0,0,1-1,1A.979.979,0,0,1,1,9ZM9.753,4H9V3h.351a.282.282,0,0,0,.223-.148l.268-.536a.333.333,0,0,0,.009-.066A.25.25,0,0,0,9.6,2H9V1.5H6.25a.25.25,0,0,0,0,.5H8V4.5L5,7H4V5.5A.5.5,0,0,0,3.5,5H3V4H4.75A.25.25,0,0,0,5,3.75a.245.245,0,0,0-.223-.239V3.5L1.25,3A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4H2V5H1.5a.5.5,0,0,0-.5.5V8H6.172a1,1,0,0,0,.709-.294L7.3,7.292A1,1,0,0,1,8,7H9.752A.248.248,0,0,0,10,6.752v-2.5A.247.247,0,0,0,9.753,4ZM9,8a1,1,0,1,0,1,1A1,1,0,0,0,9,8Z' })], 'Scooter11');

export default scooter11;
