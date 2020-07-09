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

var natural15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M8.753,6.278a.5.5,0,0,1-.51,0A4.109,4.109,0,0,1,6.5,3.5a2.779,2.779,0,0,0-.59-1.506l-.019-.027a.257.257,0,0,1-.056-.144.237.237,0,0,1,.25-.25.264.264,0,0,1,.057.011A3.523,3.523,0,0,1,7.5,2.5L8.28.94a.246.246,0,0,1,.44,0L9.5,2.5a3.4,3.4,0,0,1,1.339-.907.283.283,0,0,1,.1-.021c.175.009.212.119.221.249a.35.35,0,0,1-.043.141A5.2,5.2,0,0,0,10.5,3.5,4.113,4.113,0,0,1,8.753,6.278ZM5,8H6.289a.25.25,0,0,0,.25-.25.241.241,0,0,0-.061-.15L4.7,5.235a.255.255,0,0,0-.391,0L2.518,7.589a.274.274,0,0,0-.062.161.25.25,0,0,0,.25.25H4L1.335,10.6a.273.273,0,0,0-.058.152A.25.25,0,0,0,1.529,11H3L1.435,12.565a.255.255,0,0,0,.18.435H4v1H5V13H7.385a.255.255,0,0,0,.18-.435L6,11H7.471a.25.25,0,0,0,.25-.25.233.233,0,0,0-.058-.149Zm9.345,3.748a.252.252,0,0,1-.252.252H8.908a.252.252,0,0,1-.226-.365L11.27,6.451a.252.252,0,0,1,.451,0l2.6,5.184h0A.251.251,0,0,1,14.345,11.748ZM12.75,10,11.5,7.5,10.25,10Z' })], 'Natural15');

module.exports = natural15;
