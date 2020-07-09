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

var grocery11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'rect7842-7', d: 'M9.75,1.5C9.7464,1.4999,9.4324,1.4942,9.1191,1.6875C8.8041,1.8819,8.5,2.3013,8.5,3H8.2539H1l0.75,3.5 C1.8571,7,2.5,7,2.5,7h6c0,0-0.0027,0.2466-0.1523,0.4961S7.9306,8,7.25,8H2C1.6619,7.9952,1.6619,8.5048,2,8.5h1.25h4 c0.8194,0,1.302-0.3705,1.5273-0.7461C9.0027,7.3784,9,7,9,7V3c0-0.567,0.1959-0.7725,0.3809-0.8867 C9.5659,1.9991,9.7461,2,9.7461,2C9.7474,2,9.7487,2,9.75,2h0.5c0.3381,0.0048,0.3381-0.5048,0-0.5H9.7539H9.75z M7.25,8.5 C6.8358,8.5,6.5,8.8358,6.5,9.25S6.8358,10,7.25,10S8,9.6642,8,9.25S7.6642,8.5,7.25,8.5z M3.25,8.5C2.8358,8.5,2.5,8.8358,2.5,9.25 S2.8358,10,3.25,10S4,9.6642,4,9.25S3.6642,8.5,3.25,8.5z' })], 'Grocery11');

export default grocery11;
