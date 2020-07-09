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

var wetland11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1.11,3.33C1.4171,3.0907,1.8016,2.9732,2.19,3C3.0659,2.9354,3.8483,3.5449,4,4.41L4.57,7.8 c-0.455-0.219-0.985-0.219-1.44,0L2.56,4.41C2.3459,3.7852,1.7699,3.3562,1.11,3.33z M5.45,8.21 c0.276-0.2223,0.5966-0.3826,0.94-0.47l0.9-5.5c0.2141-0.6248,0.7901-1.0538,1.45-1.08C8.4346,0.9076,8.0456,0.7791,7.65,0.8 C6.7643,0.7373,5.978,1.3629,5.84,2.24L4.9,7.88C5.0968,7.9658,5.2817,8.0767,5.45,8.21z M8.58,7.85L8.58,7.85 C8.6925,7.7563,8.8129,7.6727,8.94,7.6l0.5-3.21c0.2108-0.6287,0.7875-1.0622,1.45-1.09c-0.3054-0.2524-0.6944-0.3809-1.09-0.36 C8.9147,2.8833,8.1331,3.5129,8,4.39l-0.48,3c0.3812,0.0689,0.7409,0.2264,1.05,0.46H8.58z M10.14,8.75L10.14,8.75 c-0.3136-0.0079-0.6193,0.0988-0.86,0.3l-0.34,0.3c-0.2017,0.1717-0.4983,0.1717-0.7,0L7.91,9.07 c-0.5123-0.4282-1.2577-0.4282-1.77,0L5.8,9.37c-0.2,0.1661-0.49,0.1661-0.69,0L4.77,9.05C4.2553,8.6247,3.5099,8.6289,3,9.06 C2.89,9.15,2.79,9.25,2.68,9.34C2.6141,9.3899,2.5395,9.4272,2.46,9.45C2.2484,9.4973,2.0276,9.4288,1.88,9.27 C1.7014,9.1151,1.5108,8.9747,1.31,8.85C1.1537,8.7667,0.9762,8.7318,0.8,8.75l0,0c-0.1988,0-0.36,0.1612-0.36,0.36 c0,0.1988,0.1612,0.36,0.36,0.36l0,0C0.9778,9.4824,1.1434,9.5652,1.26,9.7l0.22,0.2c0.4962,0.3888,1.1938,0.3888,1.69,0 c0.14-0.1,0.26-0.23,0.4-0.34c0.2034-0.1775,0.5066-0.1775,0.71,0l0.25,0.29c0.514,0.4338,1.266,0.4338,1.78,0 c0.11-0.08,0.2-0.18,0.3-0.27c0.2185-0.2174,0.5715-0.2174,0.79,0l0.29,0.3c0.3601,0.3115,0.8561,0.4138,1.31,0.27 c0.2642-0.0794,0.5024-0.2278,0.69-0.43c0.1208-0.1486,0.2987-0.2394,0.49-0.25l0,0c0.2016-0.0138,0.3538-0.1884,0.34-0.39 s-0.1884-0.3538-0.39-0.34L10.14,8.75z' })], 'Wetland11');

module.exports = wetland11;
