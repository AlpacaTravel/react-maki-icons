'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

var recycling15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M2.4556,8.6134C2.118,9.2112,1.501,10.3021,2.593,11.0312c0.3432,0.2268,0.7275,0.3836,1.131,0.4614 C4.0314,11.5382,4.0466,12.0111,3.6855,12c-0.3849-0.0193-2.2596-0.1934-2.5606-1.5995c-0.1556-0.8213,0.0204-1.5571,0.504-2.3556 L2.3263,6.812L1.0196,6.0688L4.5,4v4L3.1941,7.3057L2.4556,8.6134z M6.7,2.034c1.155-0.628,1.823,0.43,2.191,1.007l0.8059,1.2631 L8.431,5.112L12,6.986L11.803,2.96l-1.2639,0.8066L9.779,2.578C9.2572,1.8321,8.875,1.2812,7.944,1.033 C6.307,0.7203,5.3007,2.6194,5.311,2.607c-0.1639,0.2871,0.2156,0.5399,0.451,0.21C6.0202,2.4969,6.339,2.2309,6.7,2.034z M13.294,8.221c-0.0877-0.1897-0.5487-0.1413-0.419,0.267c0.1312,0.3892,0.1845,0.8003,0.157,1.21C12.939,11.01,11.684,11,11,11H9.5 V9.5l-3.5,2l3.488,2.025L9.4926,12H11c0.8906,0.0153,1.5999-0.1759,2.2-0.713C14.4,10.226,13.294,8.221,13.294,8.221z' })], 'Recycling15');

module.exports = recycling15;
