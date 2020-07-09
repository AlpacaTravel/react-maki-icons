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

var parkingGarage15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10.5,10.14c-0.6637,0.4788-1.4732,0.7121-2.29,0.66h-1.9V14h-1.9V5h3.92 c0.7801-0.0414,1.5484,0.2041,2.16,0.69c0.5779,0.5595,0.875,1.3483,0.81,2.15C11.4042,8.6892,11.1088,9.5388,10.5,10.14z M9,6.9 C8.711,6.6881,8.3579,6.5822,8,6.6H6.31v2.65H8c0.3612,0.0191,0.717-0.0947,1-0.32c0.2559-0.2675,0.3867-0.6308,0.36-1 C9.4072,7.5493,9.274,7.1684,9,6.9z M14.41,4.21c0.114-0.2486,0.007-0.5427-0.24-0.66L7.5,0.45l-6.71,3.1 C0.5387,3.666,0.429,3.9637,0.545,4.215C0.661,4.4663,0.9587,4.576,1.21,4.46l0,0L7.5,1.55l6.29,2.9 c0.2486,0.114,0.5427,0.007,0.66-0.24H14.41z' })], 'ParkingGarage15');

module.exports = parkingGarage15;
