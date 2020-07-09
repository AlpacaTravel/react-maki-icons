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

var toilet11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M3.33,2.19c-0.6075,0-1.1-0.4925-1.1-1.1s0.4925-1.1,1.1-1.1s1.1,0.4925,1.1,1.1v0C4.43,1.6975,3.9375,2.19,3.33,2.19z M10.27,1.09c0-0.6075-0.4925-1.1-1.1-1.1c-0.6075,0-1.1,0.4925-1.1,1.1s0.4925,1.1,1.1,1.1c0.6036,0,1.0945-0.4864,1.1-1.09V1.09z M6.51,4.93L6.51,4.93L4.7,3.12l0,0C4.6306,3.0442,4.5328,3.0008,4.43,3H2.22C2.1271,3.0008,2.0378,3.0365,1.97,3.1H2L0.14,4.93 c-0.1709,0.1218-0.2107,0.3591-0.0889,0.53s0.3591,0.2107,0.53,0.0889C0.6155,5.5244,0.6455,5.4944,0.67,5.46l1.58-1.58L0.77,8h1.46 v2.51c-0.0055,0.0365-0.0055,0.0735,0,0.11c0.0339,0.2071,0.2293,0.3475,0.4364,0.3136C2.8274,10.9072,2.9536,10.781,2.98,10.62H3V8 h0.69v2.63l0,0c0.0339,0.2071,0.2293,0.3475,0.4364,0.3136C4.2874,10.9172,4.4136,10.791,4.44,10.63 c0.0055-0.0365,0.0055-0.0735,0-0.11V8h1.44L4.41,3.88L6,5.46l0,0c0.0718,0.0783,0.1738,0.1221,0.28,0.12 c0.2099,0,0.38-0.1701,0.38-0.38l0,0C6.6518,5.0924,6.597,4.9938,6.51,4.93z M8.62,7v3.63 c-0.0335,0.2016,0.1028,0.3921,0.3044,0.4256c0.2016,0.0335,0.3921-0.1028,0.4256-0.3044c0.0067-0.0401,0.0067-0.0811,0-0.1212V7H11 V3.37C11,3.1657,10.8343,3,10.63,3H7.71C7.5057,3,7.34,3.1657,7.34,3.37V7H8.62z' })], 'Toilet11');

module.exports = toilet11;
