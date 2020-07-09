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

var recycling11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.5,8.5C8.953,9.019,7.84,8.935,7,9v1L4.5,8.5L7,7v1h1c0.634,0,0.83,0,1.054-0.127 c0.3524-0.1763,0.5267-0.5807,0.413-0.958C9.3824,6.5569,9.8667,6.4902,9.952,6.8C10.1235,7.4067,9.9502,8.0586,9.5,8.5z M1.9482,5.0922C1.9479,5.0928,1.9473,5.0934,1.947,5.094c-0.4,0.743-1.065,1.637-0.921,2.377 c0.1311,0.6165,0.5882,1.1123,1.192,1.293c0.3722,0.1203,0.4663-0.3954,0.161-0.472C2.0002,8.1852,1.753,7.8215,1.793,7.43 c0.012-0.258,0.122-0.42,0.461-0.956c0.134-0.211,0.309-0.485,0.537-0.843c0.0003-0.0004,0.0005-0.0008,0.0008-0.0012L3.635,6.167 l0.078-2.914L1.105,4.555L1.9482,5.0922z M4.884,1.914c0.2504-0.3036,0.6828-0.3834,1.025-0.189C6.14,1.84,6.245,2.006,6.598,2.532 c0.14,0.208,0.32,0.479,0.555,0.832l0.0001,0.0001L6.322,3.919l2.636,1.246L8.817,2.253L7.9843,2.8091 C7.4644,2.1472,6.9173,1.1786,6.188,1.014C5.5701,0.8809,4.9288,1.0965,4.517,1.576C4.2529,1.9137,4.7157,2.1216,4.884,1.914z' })], 'Recycling11');

export default recycling11;
