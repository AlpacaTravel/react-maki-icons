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

var hairdresser15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M15,3c0,0-2-0.6-3.5,0.5l-4.3,3C6.4,5.9,5.2,5.2,4,4.8V4c0-1.1-0.9-2-2-2C0.9,2,0,2.9,0,4v1.5 C0,6,0.5,6,0.5,6H2h0.5C4.5,6,6,7.5,6,7.5S4.5,9,2.5,9H2H0.5C0.5,9,0,9,0,9.5V11c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-0.8 c1.2-0.4,2.4-1.1,3.2-1.7l4.3,3C13,12.6,15,12,15,12L8.5,7.5L15,3z M3,5H2H1V4c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1V5z M3,11 c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-1h1h1V11z M7.25,8c-0.2761,0-0.5-0.2239-0.5-0.5S6.9739,7,7.25,7s0.5,0.2239,0.5,0.5 S7.5261,8,7.25,8z' })], 'Hairdresser15');

export default hairdresser15;