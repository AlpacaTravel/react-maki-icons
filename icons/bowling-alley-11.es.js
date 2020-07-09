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

var bowlingAlley11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'icon_concepts:_sports_leisure', d: 'M6.02,3.94c.04-.1.13-.4.17-.49A2.8252,2.8252,0,0,0,4.5,3a3.5,3.5,0,0,0,0,7,2.88,2.88,0,0,0,1.54-.4,8.5971,8.5971,0,0,1-.4-2.61A12.7588,12.7588,0,0,1,6.02,3.94ZM2.5,6.98a.48.48,0,1,1,.48-.48A.4867.4867,0,0,1,2.5,6.98Zm1-2a.48.48,0,1,1,.48-.48A.4867.4867,0,0,1,3.5,4.98Zm1,2a.48.48,0,1,1,.48-.48A.4867.4867,0,0,1,4.5,6.98ZM8.0981,2.4992c0-.5-.1-.5-.1-1,0-.7816.5-.7.5-.7s.5-.0814.5.7c0,.5-.1.5-.1,1,0,1.5,1.075,2.5039,1.075,4.5,0,1.5-.475,3-.975,3h-1c-.5,0-.975-1.5-.975-3C7.0231,5.0031,8.0981,3.9992,8.0981,2.4992Z' })], 'BowlingAlley11');

export default bowlingAlley11;
