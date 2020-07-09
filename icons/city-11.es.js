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

var city11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.7514,3h-0.75V1.25c0-0.13807-0.11193-0.25-0.25-0.25C8.75137,1,8.75133,1,8.7513,1h-0.5 c-0.13807,0-0.25,0.11193-0.25,0.25V3h-0.75c-0.13807,0-0.25,0.11193-0.25,0.25v3.751H5.2518c-0.13862,0-0.251,0.11238-0.251,0.251 v2.5c0.0011,0.13784,0.11315,0.249,0.251,0.249h4.5006c0.13768-0.00055,0.249-0.11232,0.249-0.25V3.25 C10.0014,3.11193,9.88947,3,9.7514,3z M6.0009,8.0012h1v1h-1V8.0012z M9.0009,9.0012h-1v-1h1V9.0012z M9.0009,7.0012h-1v-1h1V7.0012 z M9.0009,5.0012h-1v-1h1V5.0012z M6.0009,1.2507C6.00129,1.11263,5.88967,1.00039,5.7516,1C5.75133,1,5.75107,1,5.7508,1H3.25 C3.11193,1,3,1.11193,3,1.25V2H2.25C2.11193,2,2,2.11193,2,2.25V3H1.25C1.11193,3,1,3.11193,1,3.25v6.5014 c0,0.13807,0.11193,0.25,0.25,0.25H4V6.0009h2V1.25L6.0009,1.2507z M3,9.0013H2v-1h1V9.0013z M3,7.0013H2v-1h1V7.0013z M3,5.0013H2 v-1h1V5.0013z M5,5.0013H4v-1h1V5.0013z M5,3.0013H4V2h1v1V3.0013z' })], 'City11');

export default city11;
