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

var religiousBuddhist11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M11.0016,5.8008v-0.5H9.9895C9.93427,4.28235,9.53269,3.31335,8.8513,2.5544l0.8271-0.8271l-0.354-0.3541L8.5012,2.2 c-0.75994-0.68207-1.73031-1.08369-2.75-1.1382V0h-0.5v1.0622c-0.99761,0.05474-1.94816,0.442-2.7,1.1l-0.876-0.886L1.32,1.6282 L2.19,2.5C1.48299,3.26753,1.06626,4.25789,1.0118,5.3H0v0.5h1.0121C1.06715,6.81867,1.46863,7.78795,2.15,8.5472L1.3229,9.3743 l0.3543,0.3541L2.5,8.9013c0.75994,0.68207,1.73031,1.08369,2.75,1.1382v0.9621h0.5v-0.9621 C6.77029,9.98353,7.74071,9.58012,8.5,8.8963l0.82,0.8311l0.3551-0.3521L8.8553,8.5412c0.67858-0.75782,1.07864-1.72428,1.1342-2.74 h1.0121V5.8008z M9.5624,5.3008H6.1009l2.4483-2.4444C9.15109,3.53478,9.50787,4.39554,9.5624,5.3008z M8.1952,2.5L5.7508,4.9467 V1.4892C6.65579,1.54295,7.51655,1.89889,8.1952,2.5z M5.2508,1.4892v3.4L2.85,2.4614C3.5221,1.88298,4.36561,1.5414,5.2508,1.4892z M2.4914,2.8092l2.46,2.4914H1.4392c0.05523-0.92636,0.42665-1.80572,1.0522-2.4912L2.4914,2.8092z M1.4392,5.8008h3.4615 L2.4524,8.2452C1.85051,7.56682,1.49373,6.70606,1.4392,5.8008z M2.8064,8.6008l2.4444-2.4469v3.4575 C4.34592,9.55774,3.4852,9.20206,2.8064,8.6013V8.6008z M5.7508,9.6108V6.1109l2.45,2.4814 c-0.67905,0.60519-1.54206,0.96416-2.45,1.0191V9.6108z M8.5508,8.2366L6.1479,5.8008h3.4145 C9.5079,6.70256,9.15336,7.56019,8.5552,8.2372h-0.004L8.5508,8.2366z' })], 'ReligiousBuddhist11');

module.exports = religiousBuddhist11;
