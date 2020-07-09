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

var hairdresser11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path6232', d: 'M1.5,2C0.6716,2,0,2.6716,0,3.5v1C0,5,0.5,5,0.5,5h1C3,5,4,5.5,4,5.5S3,6,1.5,6h-1C0.5,6,0,6,0,6.5v1 C0,8.3284,0.6716,9,1.5,9S3,8.3284,3,7.5V6.8848C3.8082,6.727,4.5865,6.4316,5.2246,6.1426L8.5,8C10,8.75,11,8,11,8L6.5,5.5L11,3 c0,0-1-0.75-2.5,0L5.2246,4.8574C4.5866,4.5684,3.8081,4.2731,3,4.1152V3.5039C3,3.5026,3,3.5013,3,3.5C3,2.6716,2.3284,2,1.5,2z M1.5,3C1.7761,3,2,3.2239,2,3.5S1.7761,4,1.5,4S1,3.7761,1,3.5S1.2239,3,1.5,3z M5.2324,5.25c0.0059-0.0002,0.0117-0.0002,0.0176,0 c0.1381,0,0.25,0.1119,0.25,0.25S5.3881,5.75,5.25,5.75S5,5.6381,5,5.5C4.9997,5.3685,5.1013,5.2592,5.2324,5.25z M1.5,7 C1.7761,7,2,7.2239,2,7.5S1.7761,8,1.5,8S1,7.7761,1,7.5S1.2239,7,1.5,7z' })], 'Hairdresser11');

module.exports = hairdresser11;
