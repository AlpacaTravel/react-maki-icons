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

var castle15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M11,4H4C3.4477,4,3,3.5523,3,3V0.5C3,0.2239,3.2239,0,3.5,0S4,0.2239,4,0.5V2h1V1c0-0.5523,0.4477-1,1-1s1,0.4477,1,1v1h1V1 c0-0.5523,0.4477-1,1-1s1,0.4477,1,1v1h1V0.5C11,0.2239,11.2239,0,11.5,0S12,0.2239,12,0.5V3C12,3.5523,11.5523,4,11,4z M14,14.5 c0,0.2761-0.2239,0.5-0.5,0.5h-12C1.2239,15,1,14.7761,1,14.5S1.2239,14,1.5,14H2c0.5523,0,1-0.4477,1-1c0,0,1-6,1-7 c0-0.5523,0.4477-1,1-1h5c0.5523,0,1,0.4477,1,1c0,1,1,7,1,7c0,0.5523,0.4477,1,1,1h0.5c0.2723-0.0001,0.4946,0.2178,0.5,0.49V14.5z M9,10.5C9,9.6716,8.3284,9,7.5,9S6,9.6716,6,10.5V14h3V10.5z' })], 'Castle15');

module.exports = castle15;
