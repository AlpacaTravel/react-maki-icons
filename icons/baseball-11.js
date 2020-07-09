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

var baseball11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M7,3c0,0.5523-0.4477,1-1,1S5,3.5523,5,3s0.4477-1,1-1S7,2.4477,7,3z M9.85,10.24L9.85,10.24l-3-4.85 C6.7391,5.2011,6.5603,5.0616,6.35,5H2.5C2.2239,5,2,5.2239,2,5.5S2.2239,6,2.5,6H5l0.92,1.09l-2.73,3l0,0 C3.0637,10.1876,2.9928,10.3405,3,10.5C3,10.7761,3.2239,11,3.5,11c0.1224-0.0006,0.2401-0.047,0.33-0.13l0,0l3-2.71L9,10.81l0,0 c0.0912,0.1178,0.231,0.1877,0.38,0.19c0.2761,0,0.5-0.2239,0.5-0.5C9.8938,10.4122,9.8834,10.3223,9.85,10.24z M4,0.28 C4,0.1254,3.8746,0,3.72,0C3.6221,0.0262,3.5348,0.0821,3.47,0.16L2,4.59C1.9941,4.6331,1.9941,4.6769,2,4.72 C2,4.8746,2.1254,5,2.28,5c0.1015-0.0243,0.1926-0.0803,0.26-0.16L4,0.41C4.006,0.3669,4.006,0.3231,4,0.28z' })], 'Baseball11');

module.exports = baseball11;
