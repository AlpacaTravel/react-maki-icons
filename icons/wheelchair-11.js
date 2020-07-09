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

var wheelchair11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9,2c0,0.5523-0.4477,1-1,1S7,2.5523,7,2s0.4477-1,1-1S9,1.4477,9,2z M2.5,4c0.0595,0.0109,0.1205,0.0109,0.18,0l0,0 l1.79-0.83l0.46,0.48L4.39,4.5c0.7851,0.1244,1.5102,0.4957,2.07,1.06l0.44-0.8c0.1914-0.2972,0.1057-0.6932-0.1915-0.8846 C6.7057,3.8736,6.7029,3.8718,6.7,3.87L4.85,2.15l0,0C4.7176,1.9875,4.4965,1.9272,4.3,2l0,0l-2,1l0,0 C2.0239,3.0552,1.8448,3.3239,1.9,3.6S2.2239,4.0552,2.5,4z M6.59,8.2C6.5854,8.7633,6.4074,9.3115,6.08,9.77 c-0.1844,0.2837-0.4263,0.5256-0.71,0.71C4.9099,10.8129,4.3578,10.9946,3.79,11C2.2475,10.9945,1,9.7425,1,8.2 c0.0054-0.5678,0.1871-1.1199,0.52-1.58c0.2059-0.2655,0.4445-0.5041,0.71-0.71C2.6857,5.5846,3.2301,5.4066,3.79,5.4 C5.3364,5.4,6.59,6.6536,6.59,8.2L6.59,8.2z M5.19,8.89C5.3032,8.6772,5.3648,8.4409,5.37,8.2C5.3645,7.3313,4.6587,6.63,3.79,6.63 C3.5491,6.6352,3.3127,6.6968,3.1,6.81c-0.2885,0.1742-0.5317,0.414-0.71,0.7c-0.1147,0.2158-0.1764,0.4557-0.18,0.7 c0.0055,0.8687,0.7113,1.57,1.58,1.57c0.2443-0.0036,0.4843-0.0653,0.7-0.18C4.7824,9.4299,5.024,9.1848,5.19,8.89z M9,6.4 C8.9544,6.149,8.7238,5.9751,8.47,6H6.82c0.223,0.3051,0.3983,0.6423,0.52,1H8l1,2.59c0.0475,0.2328,0.2524,0.4,0.49,0.4h0.1 c0.2725-0.0445,0.4574-0.3015,0.4129-0.5741C10.002,9.4106,10.001,9.4053,10,9.4L9,6.4z' })], 'Wheelchair11');

module.exports = wheelchair11;
