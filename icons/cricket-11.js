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

var cricket11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M6,1c0,0.5523-0.4477,1-1,1S4,1.5523,4,1s0.4477-1,1-1S6,0.4477,6,1z M8.88,5.18l-1-2l0,0l0,0 C7.7859,3.0671,7.647,3.0012,7.5,3H2.77C2.3827,2.9815,2.0467,3.2651,2,3.65l0,0l-1,6.71l0,0c-0.0068,0.0464-0.0068,0.0936,0,0.14 C1,10.7761,1.2239,11,1.5,11c0.2307,0.0129,0.4391-0.1371,0.5-0.36l0,0l1.22-3.89l0,0l0.21-0.83l0.4,0.44l0,0L5,7.6v2.9 C5,10.7761,5.2239,11,5.5,11S6,10.7761,6,10.5v-3l0,0l0,0C5.9971,7.3984,5.9621,7.3004,5.9,7.22l0,0L4.45,5.5L5.5,4h1.71l0.92,1.84 l0,0C8.2247,5.9439,8.3594,6.0022,8.5,6C8.7723,6.0001,8.9946,5.7822,9,5.51C8.9826,5.3931,8.9418,5.2808,8.88,5.18z M10.5,8 C10.2239,8,10,8.2239,10,8.5S10.2239,9,10.5,9S11,8.7761,11,8.5S10.7761,8,10.5,8z M8.69,8V7.25C8.69,7.1119,8.5781,7,8.44,7 S8.19,7.1119,8.19,7.25V8C8.0378,8.0855,7.9426,8.2455,7.94,8.42v2.08c0,0.2761,0.2239,0.5,0.5,0.5s0.5-0.2239,0.5-0.5V8.41 C8.9339,8.2391,8.8392,8.0837,8.69,8z' })], 'Cricket11');

module.exports = cricket11;
