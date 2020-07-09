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

var playground15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M2,1.15c0.2091-0.8016,1.0284-1.2819,1.83-1.0729s1.2819,1.0284,1.0729,1.83C4.7026,2.6752,3.9386,3.1542,3.16,3 C2.3474,2.839,1.8191,2.0498,1.98,1.2371C1.9858,1.2079,1.9925,1.1788,2,1.15z M13,12.32c0.1032,0.5426-0.2531,1.066-0.7956,1.1692 c-0.0015,0.0003-0.0029,0.0006-0.0044,0.0008c-0.4252,0.086-0.8574-0.1119-1.07-0.49l0,0L9.45,9.63L8,9.92L7.78,10H7.72v2.15 L8.34,12h0.14c0.2871,0.0054,0.5155,0.2425,0.5101,0.5297C8.9862,12.7361,8.8606,12.9207,8.67,13l-5,1l0,0 c-0.0563,0.0095-0.1137,0.0095-0.17,0c-0.2872,0-0.52-0.2328-0.52-0.52c0-0.2099,0.1262-0.3993,0.32-0.48l0,0l4.15-0.83V10 l-3.22,0.58l0,0c-0.164,0.0423-0.336,0.0423-0.5,0c-0.3394-0.0867-0.6088-0.3446-0.71-0.68H3L2,5.83l0,0 C1.9688,5.6884,1.9688,5.5416,2,5.4c0.0936-0.387,0.4078-0.6815,0.8-0.75l0,0l4.7-0.52V0h0.22v4.1h0.06L8,4.08L8.4,4h0.21 c0.2673,0.0643,0.4326,0.3323,0.37,0.6C8.9361,4.835,8.729,5.0041,8.49,5L8,5.08H7.78H7.72v2.86h0.06L8,7.88l1.81-0.36l0,0l0,0 c0.4275-0.0352,0.8299,0.2062,1,0.6l0,0l2,3.94l0,0C12.887,12.1358,12.9511,12.2236,13,12.32z M7.5,5.13L5,5.4l0.74,2.94L7.5,8V5.13 z' })], 'Playground15');

module.exports = playground15;
