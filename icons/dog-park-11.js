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

var dogPark11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'rect4698', d: 'M7.5,1 c0,0-0.3457,0.0371-0.5,0.5l-0.5,2l2,1.5H10c1,0,1-1,1-1L9.5,2.5C9,2,8.5,2,8,2V1.5C8,1.5,8,1,7.5,1z M2.5,2 c0,0-0.3534-0.0069-0.7227,0.1777S1,2.8333,1,3.5v0.9648C0.9996,4.4766,0.9996,4.4883,1,4.5V5v0.5C1,6.5,1,7,0.5,7C0.5,7,0,7,0,7.5 v2c0,0,0,0.5,0.5,0.5S1,9.5,1,9.5V8c0.3537,0,0.6906-0.1371,1-0.2988V9.5c0,0,0,0.5,0.5,0.5S3,9.5,3,9.5V7h3l0.6641,1.9922 C7,9.9999,7.5,10,7.5,10H8c0,0,0.5,0,0.5-0.5S8,9,8,9V6.5C8,5.6094,7.3678,5.2449,7,5L5.498,4H2V3.5 c0-0.3333,0.0919-0.3624,0.2227-0.4277C2.3534,3.0069,2.5,3,2.5,3C3.1762,3.0096,3.1762,1.9904,2.5,2z' })], 'DogPark11');

module.exports = dogPark11;
