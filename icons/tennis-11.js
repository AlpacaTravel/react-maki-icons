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

var tennis11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.38,1.63C8.5569.7765,6.6118.8078,5.24,2.24A4.26,4.26,0,0,0,4.05,5a4.1491,4.1491,0,0,1-.5,2.07.62.62,0,0,0-.67.12L1.19,8.88a.61.61,0,0,0,0,.85l.09.09a.5941.5941,0,0,0,.84.01l.01-.01L3.82,8.13a.5994.5994,0,0,0,.12-.67,5.8237,5.8237,0,0,1,2.21-.49A3.9655,3.9655,0,0,0,8.77,5.78C10.09,4.46,10.3421,2.6276,9.38,1.63ZM6.15,6.47a1.6589,1.6589,0,0,1-1.17-.44,1.923,1.923,0,0,1-.31-1.98L6.95,6.33A2.5434,2.5434,0,0,1,6.15,6.47Zm1.06-.23L4.77,3.8a3.72,3.72,0,0,1,.7-1.07L8.28,5.55A3.5558,3.5558,0,0,1,7.21,6.24Zm1.25-.87L5.64,2.54a3.9241,3.9241,0,0,1,1.04-.71h.01l2.5,2.5A3.578,3.578,0,0,1,8.46,5.37Zm.83-1.29L6.94,1.72a2.76,2.76,0,0,1,.92-.17,1.6156,1.6156,0,0,1,1.17.44,1.7156,1.7156,0,0,1,.41,1.52A3,3,0,0,1,9.29,4.08Z' })], 'Tennis11');

module.exports = tennis11;
