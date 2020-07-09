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

var skiing11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M11,3.68c-0.0021,0.602-0.4917,1.0883-1.0937,1.0863C9.3043,4.7642,8.818,4.2745,8.82,3.6726 c0.0021-0.602,0.4917-1.0883,1.0937-1.0863C9.9425,2.5864,9.9713,2.5876,10,2.59C10.5666,2.6369,11.0019,3.1115,11,3.68z M10.17,9 c-0.0623-0.1197-0.2083-0.1684-0.33-0.11C9.3623,9.1811,8.7807,9.247,8.25,9.07L3.69,6.81l1.9-1V3.68l1.09,0.55v2.18L7.77,7 l1.09-0.55L7.77,5.86V2.59L5.59,1.5L4.5,2v3.32l-1.9,1l-2-1C0.4757,5.2592,0.3258,5.3107,0.265,5.435 C0.2042,5.5593,0.2557,5.7092,0.38,5.77l0,0L8,9.54c0.2402,0.1011,0.4995,0.1489,0.76,0.14c0.4466-0.0082,0.8851-0.1212,1.28-0.33 c0.1286-0.0502,0.1922-0.1951,0.142-0.3238C10.1785,9.0173,10.1745,9.0085,10.17,9z' })], 'Skiing11');

export default skiing11;
