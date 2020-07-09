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

var zoo15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path17499', d: ' M8.3879,3.8928C8.3879,3.8928,7.6818,5,7,5H4.5C3.8182,5,3.2016,5.4086,2.7273,5.8636L0.5,8C0.231,8.258,0.0072,8.7681,0,9 c-0.0156,0.5,0,1,0,1s1,0,1-1V8.5l1-1h0.5l0.158,0.2892c0,0-0.9535,1.8244-0.9535,3.5289C1.7046,12,2.3864,12,2.3864,12h0.6818 c0,0,0.3409,0,0-0.3409l-0.3409-0.3409C2.7273,10.6364,3.5002,9.6667,4,9c0,0,0.0168,1.1579,0,2c-0.008,0.4096,0.2721,1,0.6818,1 h0.6818c0,0,0.3409,0,0-0.3409l-0.3409-0.3409C4.7105,10.7495,5.5,8.5,5.5,8.5C6.7716,8.5,7,9,8.5,9l0.3636,2.3182 C8.975,12.0282,9.5,12,9.5,12H11c0.3409,0,0.9611-0.3115,0.3409-0.7736L11,11V9c1.2142-0.1722,2-1,2-2h1c0.3214,0,1,0,1-0.5v-1 l-1.7045-1.6818C12.5444,3.0772,12,2.5,11,2.5C9.5469,2.5,8.8636,3.0688,8.3879,3.8928z' })], 'Zoo15');

module.exports = zoo15;
