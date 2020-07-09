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

var embassy15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M6.65,2C5.43,2,4.48,3.38,4.11,3.82C4.0365,3.9102,3.9975,4.0237,4,4.14v4.4C3.9884,8.7827,4.1758,8.9889,4.4185,9.0005 C4.528,9.0057,4.6355,8.9699,4.72,8.9c0.4665-0.6264,1.1589-1.0461,1.93-1.17C8.06,7.73,8.6,9,10.07,9 c0.9948-0.0976,1.9415-0.4756,2.73-1.09c0.1272-0.0934,0.2016-0.2422,0.2-0.4V2.45c0.0275-0.2414-0.1459-0.4595-0.3874-0.487 C12.5332,1.954,12.4527,1.9668,12.38,2c-0.6813,0.5212-1.4706,0.8834-2.31,1.06C8.6,3.08,8.12,2,6.65,2z M2.5,3 c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S3.0523,3,2.5,3z M3,4v9.48c0,0.2761-0.2239,0.5-0.5,0.5S2,13.7561,2,13.48V4 c0-0.2761,0.2239-0.5,0.5-0.5S3,3.7239,3,4z' })], 'Embassy15');

module.exports = embassy15;
