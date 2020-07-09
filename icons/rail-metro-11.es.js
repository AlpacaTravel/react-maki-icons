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

var railMetro11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path14200', d: 'M3.5,0C3,0,3,0.5,3,0.5L2,5v1c0,1.0244,1,1,1,1h5c0,0,1,0,1-1V5L8,0.5C8,0.5,8,0,7.5,0H3.5z M4,1h3l0.5,3h-4 L4,1z M3.5,5C3.7761,5,4,5.2239,4,5.5S3.7761,6,3.5,6S3,5.7761,3,5.5S3.2239,5,3.5,5z M5.25,5h0.5C5.8885,5,6,5.1115,6,5.25 S5.8885,5.5,5.75,5.5h-0.5C5.1115,5.5,5,5.3885,5,5.25S5.1115,5,5.25,5z M7.5,5C7.7761,5,8,5.2239,8,5.5S7.7761,6,7.5,6 S7,5.7761,7,5.5S7.2239,5,7.5,5z M3,8l-1,3h1.5l0.334-1h3.332L7.5,11H9L8,8H6.5l0.334,1H4.166L4.5,8H3z' })], 'RailMetro11');

export default railMetro11;
