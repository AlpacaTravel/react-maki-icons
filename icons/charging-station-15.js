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

var chargingStation15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13,4V2.49C12.9946,2.2178,12.7723,1.9999,12.5,2c-0.2816,0.0047-0.5062,0.2367-0.5015,0.5184 C11.9987,2.5289,11.9992,2.5395,12,2.55V5c0,0.5523,0.4477,1,1,1v5.5c0,0.2761-0.2239,0.5-0.5,0.5S12,11.7761,12,11.5v-2 C12,8.6716,11.3284,8,10.5,8H9V2c0-0.5523-0.4477-1-1-1H2C1.4477,1,1,1.4477,1,2v11c0,0.5523,0.4477,1,1,1h6c0.5523,0,1-0.4477,1-1 V9h1.5C10.7761,9,11,9.2239,11,9.5v2c0,0.8284,0.6716,1.5,1.5,1.5c0.8284,0,1.5-0.6716,1.5-1.5V5C14,4.4477,13.5523,4,13,4z M7.2004,7.3995l-2.6006,3.4674l-0.0164-0.0072C4.5369,10.9384,4.4667,11,4.3688,11c-0.1476,0-0.2672-0.1196-0.2672-0.2672 c0-0.028,0.0217-0.0463,0.0297-0.0717l-0.0177-0.0078l0.7766-2.3245C4.9442,8.1671,4.8238,8,4.6533,8H2.9994 C2.7936,8,2.6762,7.7651,2.7996,7.6005l2.6006-3.4674l0.0164,0.0072C5.4631,4.0616,5.5333,4,5.6312,4 c0.1476,0,0.2672,0.1196,0.2672,0.2672c0,0.028-0.0217,0.0463-0.0297,0.0717l0.0176,0.0078L5.1099,6.6711 C5.0558,6.8329,5.1762,7,5.3467,7h1.6539C7.2064,7,7.3238,7.2349,7.2004,7.3995z' })], 'ChargingStation15');

module.exports = chargingStation15;
