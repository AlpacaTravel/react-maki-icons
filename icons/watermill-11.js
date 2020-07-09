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

var watermill11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.9874,4.375C9.9216,2.5436,8.4563,1.0784,6.625,1.0126V1h-0.25v0.0126C5.274,1.0521,4.3123,1.6034,3.7004,2.4301L2.5059,1 L0,4h1v4l1.8-1l1.8,1l1.1202-0.6218C5.2513,7.2512,4.825,7.021,4.4765,6.7003L6.252,4.9247c0.0385,0.0226,0.0788,0.0383,0.123,0.05 v2.0399L6.4014,7L6.625,7.1243V4.9747c0.0442-0.0117,0.0845-0.0274,0.123-0.05l1.7755,1.7755 C8.1429,7.0505,7.6736,7.3016,7.1526,7.4177l0.5937,0.3301C9.0195,7.2596,9.9359,6.0602,9.9874,4.625H10v-0.25H9.9874z M4.2997,6.5235C3.8347,6.0182,3.5435,5.3568,3.5126,4.625h2.5126c0.0117,0.0442,0.0274,0.0845,0.05,0.123L4.2997,6.5235z M6.0253,4.375H3.5126c0.0308-0.7318,0.3221-1.3932,0.7871-1.8985L6.0753,4.252C6.0527,4.2905,6.037,4.3308,6.0253,4.375z M6.375,4.0253c-0.0442,0.0117-0.0845,0.0274-0.123,0.05L4.4765,2.2997c0.5053-0.465,1.1667-0.7563,1.8985-0.7871V4.0253z M6.625,4.0253V1.5126c0.7318,0.0308,1.3932,0.3221,1.8985,0.7871L6.748,4.0753C6.7095,4.0527,6.6692,4.037,6.625,4.0253z M8.7003,6.5235L6.9247,4.748c0.0226-0.0385,0.0383-0.0788,0.05-0.123h2.5126C9.4565,5.3568,9.1653,6.0182,8.7003,6.5235z M6.9747,4.375c-0.0117-0.0442-0.0274-0.0845-0.05-0.123l1.7755-1.7755c0.465,0.5053,0.7563,1.1667,0.7871,1.8985H6.9747z M6.4014,8 L4.6,9L3.808,8.56l0,0L2.8,8L1.792,8.56l0,0L1,9v1l1.8-1l1.8,1l1.8014-1L8.2,10L10,9V8L8.2,9L6.4014,8z' })], 'Watermill11');

module.exports = watermill11;
