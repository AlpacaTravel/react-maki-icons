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

var landuse15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M8.911,3.854A.248.248,0,0,1,9,4.044V7.75A.25.25,0,0,1,8.75,8H6.25A.25.25,0,0,1,6,7.75V6H5V7.75A.25.25,0,0,1,4.75,8H2.25A.25.25,0,0,1,2,7.75v-3.7a.248.248,0,0,1,.089-.19L5.343,1.132a.245.245,0,0,1,.315,0ZM7.752,9.5a.248.248,0,0,0-.138.042L5,11.5H4v-2a.5.5,0,0,0-1,0v2H2v-2a.5.5,0,0,0-1,0v4.25a.25.25,0,0,0,.25.25h6.5A.25.25,0,0,0,8,13.75v-4A.248.248,0,0,0,7.752,9.5ZM14,6.245v6.5a.253.253,0,0,1-.253.253H10.253A.253.253,0,0,1,10,12.747V6.25A.249.249,0,0,1,10.25,6H11V5.249A.249.249,0,0,1,11.249,5h1.5A.253.253,0,0,1,13,5.253V6h.755A.245.245,0,0,1,14,6.245ZM13,11H11v1h2Zm0-2H11v1h2Zm0-2H11V8h2Z' })], 'Landuse15');

export default landuse15;
