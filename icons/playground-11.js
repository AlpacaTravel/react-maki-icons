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

var playground11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1,0.79c0.1286-0.5371,0.6683-0.8683,1.2054-0.7397S3.0736,0.7186,2.945,1.2557C2.8183,1.7849,2.2917,2.1156,1.76,2 C1.2203,1.8826,0.878,1.35,0.9954,0.8103C0.9968,0.8035,0.9984,0.7968,1,0.79z M10.85,8.16L10.85,8.16l-2-2l0,0 C8.76,6.0612,8.6336,6.0034,8.5,6H8.37l0,0L6.5,6.55V4l0,0C6.746,4.0083,6.96,3.8328,7,3.59C7.0558,3.3225,6.8866,3.0598,6.62,3H6.5 V0H6.28v3L1.82,3.55l0,0C1.4201,3.6111,1.0965,3.9072,1,4.3C0.9688,4.4416,0.9688,4.5884,1,4.73l0,0l0.81,3.13l0,0 c0.1012,0.3354,0.3706,0.5933,0.71,0.68c0.1513,0.0357,0.3087,0.0357,0.46,0H3l3.29-0.89v1.62l-3,0.74l0,0 c-0.2761,0.0856-0.4306,0.3789-0.345,0.655c0.0856,0.2761,0.3789,0.4306,0.655,0.345c0.0566,0.0051,0.1134,0.0051,0.17,0l4-1 c0.2761-0.0828,0.4328-0.3739,0.35-0.65C8.0372,9.0839,7.7461,8.9272,7.47,9.01L7.27,9L6.5,9.22V7.58l1.83-0.51l1.81,1.78l0,0 c0.1758,0.213,0.4909,0.2432,0.7039,0.0674c0.213-0.1758,0.2432-0.4909,0.0674-0.7039C10.8956,8.1945,10.8784,8.1766,10.86,8.16 H10.85z M6.28,6.61L4.21,7.07L3.5,4.33L6.28,4V6.61z' })], 'Playground11');

module.exports = playground11;
