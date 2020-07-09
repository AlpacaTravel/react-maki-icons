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

var telephone15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4.51,8.88a0.51,0.51,0,0,0,0,.72l0.72,0.72L3.07,12.5,2.7,12.13A2.24,2.24,0,0,1,2,10.69V9.24a2.24,2.24,0,0,1,.7-1.45L7.77,2.72A2.24,2.24,0,0,1,9.22,2h1.45a2.24,2.24,0,0,1,1.45.72l0.36,0.36L10.31,5.26,9.58,4.53a0.51,0.51,0,0,0-.72,0ZM4.13,13.6a1,1,0,0,0,1.4137.0363Q5.5623,13.6186,5.58,13.6l0.72-.72a1,1,0,0,0,.0363-1.4137Q6.3186,11.4477,6.3,11.43Zm7.25-7.28a1,1,0,0,0,1.4137.0363C12.8061,6.3445,13.55,5.6,13.55,5.6a1,1,0,0,0,.0363-1.4137Q13.5686,4.1677,13.55,4.15Z' })], 'Telephone15');

export default telephone15;
