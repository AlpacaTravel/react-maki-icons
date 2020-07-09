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

var optician11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10.5,4c-0.0246,0-0.0457,0.0106-0.0694,0.014C10.2798,3.35,9.8149,3,9,3H7.5C6.6155,3,6.1454,3.4145,6.0433,4.1969 C5.8868,4.1503,5.6987,4.1084,5.5,4.1084S5.1132,4.1503,4.9567,4.1969C4.8546,3.4145,4.3845,3,3.5,3H2 C1.1851,3,0.7202,3.35,0.5694,4.014C0.5457,4.0106,0.5246,4,0.5,4C0.2239,4,0,4.2238,0,4.5C0,4.7761,0.2239,5,0.5,5 c0,1.5,1,2,2.25,2S5,6.5,5,5V4.9735c0.1148-0.0472,0.3174-0.1151,0.5-0.1151S5.8852,4.9263,6,4.9735V5c0,1.5,1,2,2.25,2 s2.25-0.5,2.25-2C10.7761,5,11,4.7761,11,4.5C11,4.2238,10.7761,4,10.5,4z M4.25,5c0,0.6492-0.1817,1.25-1.5,1.25 S1.25,5.6492,1.25,5V4.5c0-0.5888,0.1612-0.75,0.75-0.75h1.5c0.5888,0,0.75,0.1612,0.75,0.75V5z M9.75,5 c0,0.6492-0.1817,1.25-1.5,1.25S6.75,5.6492,6.75,5V4.5c0-0.5888,0.1612-0.75,0.75-0.75H9c0.5888,0,0.75,0.1612,0.75,0.75V5z' })], 'Optician11');

export default optician11;