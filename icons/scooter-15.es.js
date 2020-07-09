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

var scooter15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4.908,12a1.5,1.5,0,1,1-2.816,0Zm8.65-6C13.539,6,13,6,13,6V3h.351a.282.282,0,0,0,.223-.148l.268-.536a.334.334,0,0,0,.009-.066A.25.25,0,0,0,13.6,2H13V1.7a.215.215,0,0,0-.2-.2H9.25a.25.25,0,0,0,0,.5H12V6.6L7.6,10H6V7.5A.5.5,0,0,0,5.5,7H5V5H6.75a.25.25,0,0,0,0-.5L2.266,4.034c-.006,0-.01-.007-.016-.007a.25.25,0,0,0-.25.25V4.75A.25.25,0,0,0,2.25,5H3V7H2.5A1.538,1.538,0,0,0,1,8.5v2a.472.472,0,0,0,.442.5C1.461,11,7.5,11,7.5,11L10,10h3.5a.472.472,0,0,0,.5-.442C14,9.539,14,6.5,14,6.5A.472.472,0,0,0,13.558,6ZM12.5,11A1.5,1.5,0,1,0,14,12.5,1.538,1.538,0,0,0,12.5,11Z' })], 'Scooter15');

export default scooter15;
