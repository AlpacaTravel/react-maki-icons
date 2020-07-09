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

var cricket15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M8,1.5C8,2.3284,7.3284,3,6.5,3S5,2.3284,5,1.5S5.6716,0,6.5,0S8,0.6716,8,1.5z M10.88,7.18L10.88,7.18l-2-2l0,0l0,0 C8.7815,5.0616,8.6339,4.9952,8.48,5H3.75C3.3736,4.9915,3.0508,5.2669,3,5.64l0,0l-1,7.7l0,0c-0.0068,0.0464-0.0068,0.0936,0,0.14 c0,0.2761,0.2239,0.5,0.5,0.5c0.2251,0.0153,0.4315-0.1251,0.5-0.34l0,0l1.2-3.89l0,0l0.26-0.83l0.4,0.44l0,0L6,10.6v2.9 C6,13.7761,6.2239,14,6.5,14S7,13.7761,7,13.5v-3l0,0l0,0c-0.0081-0.0788-0.0356-0.1544-0.08-0.22l0,0L5.48,8.5l1-2.5h1.71l2,1.84 l0,0c0.0928,0.1077,0.2278,0.1697,0.37,0.17C10.8163,7.9791,11.007,7.7581,11,7.5C10.9997,7.3824,10.9571,7.2688,10.88,7.18z M14,11.27c-0.4142,0-0.75,0.3358-0.75,0.75s0.3358,0.75,0.75,0.75s0.75-0.3358,0.75-0.75S14.4142,11.27,14,11.27z M10.76,9.74V9 c0-0.1381-0.1119-0.25-0.25-0.25S10.26,8.8619,10.26,9v0.74c-0.1522,0.0855-0.2474,0.2455-0.25,0.42v3.34 c0,0.2761,0.2239,0.5,0.5,0.5s0.5-0.2239,0.5-0.5v-3.34C11.0074,9.9855,10.9122,9.8255,10.76,9.74z' })], 'Cricket15');

module.exports = cricket15;
