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

var library15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M7.47,4.92C7.47,4.92,5.7,3,1,3v8c4.7,0,6.47,2,6.47,2S9.3,11,14,11V3C9.3,3,7.47,4.92,7.47,4.92z M13,10 c-1.9614,0.0492-3.8727,0.6299-5.53,1.68C5.836,10.6273,3.9432,10.0459,2,10V4c3.4,0.26,4.73,1.6,4.75,1.61l0.73,0.74L8.2,5.6 c0,0,1.4-1.34,4.8-1.6V10z M8,10.24l-0.1-0.17c1.3011-0.5931,2.6827-0.9907,4.1-1.18v0.2c-1.3839,0.1953-2.7316,0.5929-4,1.18V10.24 z M8,9.24L7.9,9.07C9.2016,8.4802,10.5832,8.086,12,7.9v0.2c-1.3844,0.1988-2.7321,0.5997-4,1.19V9.24z M8,8.24L7.9,8.07 C9.2015,7.48,10.5831,7.0857,12,6.9v0.2c-1.3845,0.1981-2.7323,0.599-4,1.19V8.24z M8,7.24L7.9,7.07 C9.2013,6.4794,10.583,6.0851,12,5.9v0.2c-1.3844,0.1986-2.7321,0.5996-4,1.19V7.24z M6.9,10.24C5.6639,9.6641,4.3499,9.2733,3,9.08 v-0.2c1.3872,0.2028,2.7358,0.6141,4,1.22L6.9,10.24z M6.9,9.24C5.6629,8.671,4.3488,8.2869,3,8.1V7.9 c1.386,0.2027,2.7341,0.6105,4,1.21L6.9,9.24z M6.9,8.24C5.6631,7.6705,4.3489,7.2863,3,7.1V6.9c1.3868,0.199,2.7354,0.607,4,1.21 L6.9,8.24z M6.9,7.24C5.6629,6.671,4.3488,6.2869,3,6.1V5.9c1.386,0.2024,2.7342,0.6102,4,1.21L6.9,7.24z' })], 'Library15');

module.exports = library15;
