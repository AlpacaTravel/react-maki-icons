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

var logging11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.25,1a.409.409,0,0,0-.11.01.668.668,0,0,0-.44.24L8,2H7.263A.25.25,0,0,0,7,2.236a.243.243,0,0,0,0,.025V3H6.263a.256.256,0,0,0-.19.073A.248.248,0,0,0,6,3.252V4H5.237a.275.275,0,0,0-.164.073A.248.248,0,0,0,5,4.252V5H4.249a.257.257,0,0,0-.176.075l.178.178.5.5L8.5,2H9v.5L5.25,6.25l.5.5.177.177A.249.249,0,0,0,6,6.749V6h.751a.25.25,0,0,0,.176-.073A.266.266,0,0,0,7,5.759V5h.748A.248.248,0,0,0,8,4.756H8V4h.751a.267.267,0,0,0,.176-.073A.258.258,0,0,0,9,3.733V3l.78-.72a.734.734,0,0,0,.21-.42L10,1.75A.755.755,0,0,0,9.25,1ZM2,8,1.569,6.8h0a1.422,1.422,0,0,1-.07-.465V6.25A.25.25,0,0,1,1.749,6h1a.25.25,0,0,0,0-.5H1.5A.5.5,0,0,0,1,6v.415a2,2,0,0,0,.106.642L1.57,8.43a1.841,1.841,0,0,0,.1.24,1.551,1.551,0,0,0,.624.643,1.342,1.342,0,0,0,1.315,0C3.869,9.122,5,8,5,8L3.5,6.5Z' })], 'Logging11');

module.exports = logging11;
