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

var carRepair11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.5,1.25H4.3517C4.0547,0.5176,3.3389,0,2.5,0C1.7616,0,1.1238,0.4047,0.7774,1H2.5L3,2L2.5,3H0.7774 C1.1238,3.5953,1.7616,4,2.5,4c0.8389,0,1.5547-0.5176,1.8517-1.25H9.5c0.4141,0,0.75-0.3359,0.75-0.75S9.9141,1.25,9.5,1.25z' }), React.createElement('path', { key: 's-1', d: 'M8.3105,7.0344l-0.249-1.2043C7.9824,5.3491,7.5713,5,7.083,5H3.917C3.4287,5,3.0176,5.3491,2.9424,5.8101L2.6891,7.0355 C2.2987,7.1191,2,7.4498,2,7.8651V10h0.5c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h2c0,0.5522,0.4477,1,1,1s1-0.4478,1-1H9V7.8597 C9,7.4453,8.7008,7.1157,8.3105,7.0344z M3.75,9C3.3358,9,3,8.6642,3,8.25C3,7.8358,3.3358,7.5,3.75,7.5S4.5,7.8358,4.5,8.25 C4.5,8.6642,4.1642,9,3.75,9z M3.7134,7L3.917,6l3.1621,0.0122L7.2831,7H3.7134z M7.25,9C6.8358,9,6.5,8.6642,6.5,8.25 c0-0.4142,0.3358-0.75,0.75-0.75S8,7.8358,8,8.25C8,8.6642,7.6642,9,7.25,9z' })], 'CarRepair11');

export default carRepair11;
