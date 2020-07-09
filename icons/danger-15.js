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

var danger15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.94,14.68c-0.0749,0.194-0.262,0.3215-0.47,0.32c-0.0595,0.0107-0.1205,0.0107-0.18,0L7.5,12.56L1.7,15 c-0.2572,0.1005-0.5472-0.0266-0.6476-0.2838C1.0516,14.7141,1.0508,14.7121,1.05,14.71c-0.1291-0.2441-0.0358-0.5467,0.2084-0.6757 C1.2845,14.0205,1.3118,14.009,1.34,14l4.85-2l-4.85-2C1.0758,9.9197,0.9267,9.6404,1.007,9.3762s0.3596-0.4133,0.6238-0.333 C1.6545,9.0504,1.6776,9.0594,1.7,9.07l5.8,2.41l5.8-2.41c0.2494-0.1185,0.5477-0.0124,0.6662,0.237 c0.1185,0.2494,0.0124,0.5477-0.237,0.6662C13.7068,9.9839,13.6837,9.9928,13.66,10L8.8,12l4.85,2 c0.2607,0.091,0.3983,0.3761,0.3074,0.6368C13.9523,14.6515,13.9465,14.6659,13.94,14.68z M12,4.23v0.45 c-0.0021,0.2129-0.0722,0.4196-0.2,0.59C11.2414,5.8883,10.6399,6.4664,10,7v1.16c0.0015,0.208-0.126,0.3951-0.32,0.47L7.52,9.5 H7.45L5.28,8.63C5.1016,8.5428,4.9917,8.3584,5,8.16V7C4.3528,6.4675,3.7446,5.8893,3.18,5.27C3.0593,5.0972,2.9963,4.8907,3,4.68 V4.23C3.1669,2.0117,4.8974,0.2307,7.11,0h0.36l0,0h0.39C10.0862,0.2131,11.8348,1.9997,12,4.23z M6,4c0-0.5523-0.4477-1-1-1 S4,3.4477,4,4s0.4477,1,1,1S6,4.5523,6,4z M7,7c0-0.2761-0.2239-0.5-0.5-0.5S6,6.7239,6,7v0.5C6,7.7761,6.2239,8,6.5,8 S7,7.7761,7,7.5V7z M9,7c0-0.2761-0.2239-0.5-0.5-0.5S8,6.7239,8,7v0.5C8,7.7761,8.2239,8,8.5,8S9,7.7761,9,7.5V7z M11,4 c0-0.5523-0.4477-1-1-1S9,3.4477,9,4s0.4477,1,1,1S11,4.5523,11,4z' })], 'Danger15');

module.exports = danger15;