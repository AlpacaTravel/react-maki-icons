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

var bicycleShare11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M7,1A1,1,0,1,1,8,2,1,1,0,0,1,7,1ZM1.973,7.1a1.5,1.5,0,0,1,1.654.408.5.5,0,0,0,.749-.663h0A2.519,2.519,0,0,0,2.363,6a2.5,2.5,0,1,0,2.008,4.158A.5.5,0,0,0,3.623,9.5a1.5,1.5,0,1,1-1.65-2.4ZM7.1,4.8a.5.5,0,0,0,.4.2h2a.5.5,0,1,0,.014-1H7.75L6.4,2.2A.5.5,0,0,0,6.014,2a.506.506,0,0,0-.368.147l-2,2a.5.5,0,0,0,0,.707L5,6.207V8.5a.5.5,0,0,0,1,.015V6a.505.505,0,0,0-.144-.353L5.1,4.895l1.165-1.2ZM9.387,6.162A2.526,2.526,0,0,0,8.643,6a2.525,2.525,0,0,0-2.014.838.5.5,0,0,0,.75.664,1.5,1.5,0,1,1,0,1.992.5.5,0,0,0-.78.627c.011.013.022.025.034.037a2.5,2.5,0,1,0,2.752-4Z' })], 'BicycleShare11');

export default bicycleShare11;
