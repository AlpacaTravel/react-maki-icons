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

var dam11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10,7.51c0,0.2761-0.2239,0.5-0.5,0.5l0,0C9.241,8.0319,9.0006,8.1539,8.83,8.35c-0.2714,0.2887-0.6175,0.4964-1,0.6 C7.2185,9.1316,6.5566,8.9924,6.07,8.58L5.73,8.23c-0.2997-0.2948-0.7803-0.2948-1.08,0L5,9.38 c0.0664,0.268-0.0971,0.5392-0.3651,0.6055C4.5908,9.9965,4.5454,10.0013,4.5,10h-3C1.2239,10,1,9.7761,1,9.5v-8 C0.9999,1.2277,1.2178,1.0054,1.49,1h0.7c0.2346-0.0011,0.4384,0.1611,0.49,0.39L3.41,3.9l0.1-0.06C3.67,3.72,3.82,3.57,4,3.44 c0.7076-0.5968,1.7424-0.5968,2.45,0C6.6,3.57,6.74,3.71,6.89,3.83c0.2847,0.2546,0.7153,0.2546,1,0l0.41-0.4 C8.6306,3.1458,9.0541,2.9928,9.49,3l0,0c0.2761,0,0.5,0.2239,0.5,0.5S9.7661,4,9.49,4l0,0C9.231,4.0219,8.9906,4.1439,8.82,4.34 c-0.2714,0.2887-0.6175,0.4964-1,0.6C7.2085,5.1216,6.5466,4.9824,6.06,4.57L5.73,4.23C5.4324,3.9262,4.9449,3.9213,4.6411,4.2189 C4.6374,4.2226,4.6337,4.2263,4.63,4.23C4.49,4.35,4.36,4.48,4.21,4.6C4.0521,4.7221,3.8768,4.8198,3.69,4.89l0.67,2.32 c0.6727-0.3402,1.4836-0.2458,2.06,0.24c0.15,0.13,0.29,0.27,0.44,0.39c0.2847,0.2546,0.7153,0.2546,1,0L8.3,7.42 C8.6321,7.1394,9.0554,6.99,9.49,7l0,0C9.7661,6.9944,9.9944,7.2137,10,7.4898C10.0001,7.4965,10.0001,7.5033,10,7.51z' })], 'Dam11');

module.exports = dam11;
