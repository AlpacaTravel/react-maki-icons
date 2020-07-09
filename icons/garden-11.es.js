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

var garden11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10,6c0.0043,2.2091-1.783,4.0035-3.9922,4.0078C5.9218,10.008,5.8358,10.0054,5.75,10 c-2.2048,0.1381-4.1041-1.5374-4.2422-3.7422C1.5024,6.172,1.4998,6.086,1.5,6c1.6411-0.1206,3.1886,0.7762,3.9,2.26V5h-2 C2.9085,5.0055,2.5056,4.6116,2.5001,4.1201C2.5,4.1167,2.5,4.1134,2.5,4.11V1.84C2.492,1.6469,2.6421,1.4838,2.8352,1.4758 C2.9567,1.4708,3.0721,1.5292,3.14,1.63L4.28,3l1.17-2.33c0.0996-0.1657,0.3146-0.2193,0.4803-0.1197 C5.9794,0.5798,6.0205,0.6209,6.05,0.67L7.22,3l1.13-1.38c0.0982-0.1665,0.3128-0.2219,0.4793-0.1237 C8.946,1.5651,9.0125,1.6951,9,1.83v2.28C9,4.6015,8.6016,5,8.1101,5.0001C8.1067,5.0001,8.1034,5,8.1,5h-2v3.26 C6.8114,6.7762,8.3589,5.8794,10,6z' })], 'Garden11');

export default garden11;
