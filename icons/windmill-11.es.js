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

var windmill11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M6.375,3.9375L5.9375,3.5L6.375,3.0625h0.4375L9,0.875L8.125,0L5.9375,2.1875V2.625L5.5,3.0625L5.0625,2.625V2.1875L2.875,0 L2,0.875l2.1875,2.1875H4.625L5.0625,3.5L4.625,3.9375H4.1875L2,6.125L2.875,7l2.1875-2.1875V4.375L5.5,3.9375L5.9375,4.375v0.4375 L8.125,7L9,6.125L6.8125,3.9375H6.375z M8.5,10H8L7,7.5L5.5,6L4,7.5L3,10H2.5C2.2239,10,2,10.2238,2,10.5 C2,10.7761,2.2239,11,2.5,11h6C8.7761,11,9,10.7761,9,10.5C9,10.2238,8.7761,10,8.5,10z M6,9.9717C6,9.9873,5.9874,10,5.9717,10 H5.0283C5.0126,10,5,9.9873,5,9.9717v-0.972C5,8.7238,5.2238,8.5,5.4998,8.5C5.7761,8.5,6,8.7239,6,9.0002V9.9717z' })], 'Windmill11');

export default windmill11;
