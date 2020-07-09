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

var theatre11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path6370', d: 'M0.6055,0.6992C0.3027,0.6992,0,1.0019,0,1.3047v3.7344C0,6.4519,0.578,8,3,8h0.5V6.1836L1.2109,6.1758 c0,0,0.3026-1.1367,1.8164-1.1367c0.3028,0,0.4036,0.0006,0.6055,0.1016V3.7266c0-0.6055,0.2018-1.0078,0.6055-1.3105 C4.541,2.1133,4.789,2,5.3945,2H6V1.3945c0-0.3028-0.1972-0.6582-0.5-0.6582c-0.6055,0-1.1607,0.5684-2.4727,0.5684 C2.0182,1.3047,1.211,0.6992,0.6055,0.6992z M1.75,2.5c0.4142,0,0.75,0.3358,0.75,0.75S2.1642,4,1.75,4S1,3.6642,1,3.25 S1.3358,2.5,1.75,2.5z M5.5,3C5.1972,3,4.9453,3.4238,4.9453,3.7266v3.7344c0,1.4128,0.6053,3.0273,3.0273,3.0273 S11,8.7729,11,7.4609V3.7266C11,3.4238,10.8028,3,10.5,3C9.8945,3,8.9083,3.5,8,3.5S6.1055,3,5.5,3z M6.75,5 C7.1642,5,7.5,5.3358,7.5,5.75S7.1642,6.5,6.75,6.5S6,6.1642,6,5.75S6.3358,5,6.75,5z M9.25,5C9.6642,5,10,5.3358,10,5.75 S9.6642,6.5,9.25,6.5S8.5,6.1642,8.5,5.75S8.8358,5,9.25,5z M6.1562,8.0664h3.7344c0,0-0.3026,1.2109-1.8164,1.2109 S6.1562,8.0664,6.1562,8.0664z' })], 'Theatre11');

export default theatre11;