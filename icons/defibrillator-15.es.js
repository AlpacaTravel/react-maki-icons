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

var defibrillator15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1.55,6.3381C-0.8368,1.7416,5.18-1.3228,7.502,3.2737c2.3215-4.5965,8.3387-1.5322,5.9523,3.0644-0.0869.1671-.2028,0.3456-0.3114,0.5212H11.335L9.5205,4.1377A0.6252,0.6252,0,0,0,8.42,4.2524l-1.6484,4.12-1.33-1.33A0.6254,0.6254,0,0,0,5,6.8594H1.8611C1.7525,6.6837,1.6366,6.5052,1.55,6.3381ZM11,8.1094a0.6263,0.6263,0,0,1-.5205-0.2783L9.1387,5.82,7.58,9.7168a0.6245,0.6245,0,0,1-.4546.38A0.6047,0.6047,0,0,1,7,10.1094a0.6251,0.6251,0,0,1-.4419-0.1826L4.7412,8.1094H2.7358a42.67,42.67,0,0,0,4.46,4.6732,0.4642,0.4642,0,0,0,.6222,0,43.26,43.26,0,0,0,4.4505-4.6732H11Z' })], 'Defibrillator15');

export default defibrillator15;
