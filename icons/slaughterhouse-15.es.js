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

var slaughterhouse15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M15,8.1c0,1.376-1.363.694-1.363.694L12.5,9H11a5.309,5.309,0,0,1-1.5,2,3.272,3.272,0,0,1-.523,1.125c-.077.091-.061.2-.068.33L9,14.755a.264.264,0,0,1-.266.25A.242.242,0,0,1,8.5,14.8L8,11.5H4v3.253A.247.247,0,0,1,3.753,15h0a.25.25,0,0,1-.241-.2L3,12v-.5a8.2,8.2,0,0,1-1.426-.1A1.886,1.886,0,0,1,.9,12.826c-.128.083-.148.211-.133.386,0,0,.19,1.532.19,1.538a.25.25,0,0,1-.25.25.238.238,0,0,1-.23-.174l-.427-1.7a.35.35,0,0,1,.055-.3c.437-.68-.049-2.55-.049-2.55A1.354,1.354,0,0,1,0,9.922V7.5A2.027,2.027,0,0,1,2.736,5.586s.1.03.142.049a15.15,15.15,0,0,0,3.814.038l.179-.062a1.842,1.842,0,0,1,1.26,0,.972.972,0,0,1,.227.089,1.994,1.994,0,0,1,.287.171A1.8,1.8,0,0,0,9.5,6h1V5l.5.5c.5-1.5,2.5-1,2.5-1a1.687,1.687,0,0,0-1.5,1l2.5,2a.613.613,0,0,1,.186-.069A.318.318,0,0,1,15,7.752V8.1Z' })], 'Slaughterhouse15');

export default slaughterhouse15;
