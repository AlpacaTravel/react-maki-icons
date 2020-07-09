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

var entrance11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4,2.25C4,1.8358,4.3358,1.5,4.75,1.5S5.5,1.8358,5.5,2.25S5.1642,3,4.75,3S4,2.6642,4,2.25z M9.27,4H7.88 C7.6856,3.998,7.4985,4.0736,7.36,4.21l-4,4C3.224,8.344,3.0409,8.4194,2.85,8.42H1.73C1.3268,8.42,1,8.7468,1,9.15l0,0 c0,0.4032,0.3268,0.73,0.73,0.73h1.89c0.1909-0.0006,0.374-0.076,0.51-0.21l4-4C8.2644,5.5576,8.4348,5.4972,8.61,5.5h0.66 C9.6732,5.5,10,5.1732,10,4.77l0,0c0.0221-0.4026-0.2863-0.7468-0.6889-0.7689C9.2974,4.0003,9.2837,4,9.27,4z M4.75,3.5 C4.3358,3.5,4,3.8358,4,4.25V6l1.5-1.5V4.25C5.5,3.8358,5.1642,3.5,4.75,3.5z' })], 'Entrance11');

module.exports = entrance11;
