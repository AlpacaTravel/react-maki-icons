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

var cinema11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10,5.5v2C10,7.7761,9.7761,8,9.5,8S9,7.7761,9,7.5l0,0C8.9427,7.2478,8.7433,7.0523,8.49,7H8v1.63 C8,8.8343,7.8343,9,7.63,9H1.37C1.1657,9,1,8.8343,1,8.63V5.37C1,5.1657,1.1657,5,1.37,5h6.26C7.8343,5,8,5.1657,8,5.37V6h0.49 C8.7433,5.9477,8.9427,5.7522,9,5.5C9,5.2239,9.2239,5,9.5,5S10,5.2239,10,5.5z M2.5,2C1.6716,2,1,2.6716,1,3.5S1.6716,5,2.5,5 S4,4.3284,4,3.5S3.3284,2,2.5,2z M2.5,4C2.2239,4,2,3.7761,2,3.5S2.2239,3,2.5,3S3,3.2239,3,3.5S2.7761,4,2.5,4z M6,1 C4.8954,1,4,1.8954,4,3s0.8954,2,2,2s2-0.8954,2-2S7.1046,1,6,1z M6,4C5.4477,4,5,3.5523,5,3s0.4477-1,1-1s1,0.4477,1,1 S6.5523,4,6,4z' })], 'Cinema11');

export default cinema11;
