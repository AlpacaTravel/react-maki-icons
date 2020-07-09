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

var bbq15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.32,7.655C10.8782,7.108,11.9471,5.6506,12,4H3c0.053,1.6299,1.0978,3.0728,2.63,3.631L4.923,9.044 c-1.3571-0.2355-2.6482,0.6737-2.8837,2.0308s0.6737,2.6482,2.0308,2.8837C4.9927,14.1187,5.9273,13.7485,6.49,13h4.223l0.335,0.717 c0.0836,0.1735,0.2594,0.2836,0.452,0.283c0.0733,0.0003,0.1457-0.0158,0.212-0.047c0.2497-0.117,0.3575-0.4141,0.241-0.664 L9.32,7.655z M4.5,12.75c-0.6904,0-1.25-0.5596-1.25-1.25s0.5596-1.25,1.25-1.25s1.25,0.5596,1.25,1.25 C5.7484,12.1897,5.1897,12.7484,4.5,12.75z M6.95,12c0.2066-1.007-0.2268-2.0374-1.091-2.594L6.6,7.923 c0.577,0.1042,1.168,0.1042,1.745,0l1.9,4.07L6.95,12z M4.75,1C4.6119,1,4.5,1.1119,4.5,1.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1 C3,2.8881,3.1119,3,3.25,3S3.5,2.8881,3.5,2.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C5,1.1119,4.8881,1,4.75,1z M6.75,1 C6.6119,1,6.5,1.1119,6.5,1.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C5,2.8881,5.1119,3,5.25,3S5.5,2.8881,5.5,2.75 c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C7,1.1119,6.8881,1,6.75,1z M8.75,1C8.6119,1,8.5,1.1119,8.5,1.25c0,0.5-0.5,0.5-0.5,0.5 c-1,0-1,1-1,1C7,2.8881,7.1119,3,7.25,3S7.5,2.8881,7.5,2.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C9,1.1119,8.8881,1,8.75,1z M10.75,1 c-0.1381,0-0.25,0.1119-0.25,0.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C9,2.8881,9.1119,3,9.25,3S9.5,2.8881,9.5,2.75 c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C11,1.1119,10.8881,1,10.75,1z M12.75,1c-0.1381,0-0.25,0.1119-0.25,0.25c0,0.5-0.5,0.5-0.5,0.5 c-1,0-1,1-1,1C11,2.8881,11.1119,3,11.25,3s0.25-0.1119,0.25-0.25c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C13,1.1119,12.8881,1,12.75,1z' })], 'Bbq15');

module.exports = bbq15;
