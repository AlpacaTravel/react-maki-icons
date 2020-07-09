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

var alcoholShop15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M14,4h-4v3.44l0,0c0,0,0,0,0,0.06c0.003,0.9096,0.6193,1.7026,1.5,1.93V13H11c-0.2761,0-0.5,0.2239-0.5,0.5 S10.7239,14,11,14h2c0.2761,0,0.5-0.2239,0.5-0.5S13.2761,13,13,13h-0.5V9.43c0.8807-0.2274,1.497-1.0204,1.5-1.93c0,0,0,0,0-0.06 l0,0V4z M13,7.5c0,0.5523-0.4477,1-1,1s-1-0.4477-1-1V5h2V7.5z M5.5,2.5V2C5.7761,2,6,1.7761,6,1.5S5.7761,1,5.5,1V0.5 C5.5,0.2239,5.2761,0,5,0H4C3.7239,0,3.5,0.2239,3.5,0.5V1C3.2239,1,3,1.2239,3,1.5S3.2239,2,3.5,2v0.5C3.5,3.93,1,5.57,1,7v6 c0,0.5523,0.4477,1,1,1h5c0.5318-0.0465,0.9535-0.4682,1-1V7C8,5.65,5.5,3.85,5.5,2.5z M4.5,12C3.1193,12,2,10.8807,2,9.5 S3.1193,7,4.5,7S7,8.1193,7,9.5S5.8807,12,4.5,12z' })], 'AlcoholShop15');

module.exports = alcoholShop15;
