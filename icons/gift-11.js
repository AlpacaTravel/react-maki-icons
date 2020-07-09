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

var gift11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M0,5h4.5v1H0V5z M1,9.79C1,10.4583,1.5417,11,2.21,11c0.0033,0,0.0067,0,0.01,0h2.3V7H1V9.79z M7.64,4H3.36 C2.6675,4.0686,2.0505,3.5629,1.9819,2.8704C1.9696,2.7467,1.9757,2.6219,2,2.5C1.9503,1.7229,2.5399,1.0526,3.3171,1.0028 C3.3513,1.0006,3.3857,0.9997,3.42,1c1.0141-0.0115,1.8944,0.6969,2.1,1.69C5.7292,1.699,6.6072,0.9924,7.62,1 c0.7893,0.026,1.4081,0.687,1.3821,1.4763C9.0016,2.4909,9.0009,2.5055,9,2.52c0.1185,0.6913-0.3458,1.3478-1.0371,1.4664 C7.8563,4.0046,7.7478,4.0092,7.64,4z M4.82,3.25c0.0388-0.7888-0.5692-1.4597-1.358-1.4986C3.448,1.7508,3.434,1.7503,3.42,1.75 C3.0447,1.7369,2.7298,2.0306,2.7168,2.4059C2.7157,2.4373,2.7167,2.4688,2.72,2.5C2.6811,2.8735,2.9524,3.2079,3.3259,3.2468 C3.3572,3.25,3.3886,3.2511,3.42,3.25H4.82z M7.62,3.25c0.3753,0.0131,0.6902-0.2806,0.7032-0.6559 c0.0011-0.0314,0-0.0628-0.0032-0.0941c0.0221-0.3915-0.2773-0.7268-0.6688-0.7489C7.6408,1.7505,7.6304,1.7501,7.62,1.75 C6.8304,1.7656,6.2029,2.4184,6.2186,3.208C6.2188,3.222,6.2193,3.236,6.22,3.25H7.62z M6.52,5v1H11V5H6.52z M6.52,11h2.29 c0.6604-0.0109,1.1901-0.5495,1.19-1.21V7H6.52V11z' })], 'Gift11');

module.exports = gift11;
