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

var optician15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M14.5,6h-0.6766c-0.2828-0.5892-0.8801-1-1.5763-1H9.752C8.9344,5,8.2513,5.5656,8.059,6.3246 C7.8854,6.2835,7.6991,6.25,7.5,6.25S7.1146,6.2834,6.941,6.3245C6.7487,5.5656,6.0654,5,5.2476,5H2.7529 C2.0566,5,1.4592,5.4108,1.1765,6H0.4992C0.2235,6,0,6.2234,0,6.4991v0.0016C0,6.7765,0.2235,7,0.4992,7H1v0.5 C1,9.0889,2.0024,10,3.75,10h0.5C5.9976,10,7,9.0889,7,7.5V7.3413C7.1503,7.2933,7.3307,7.25,7.5,7.25 c0.1693,0,0.3499,0.0433,0.5,0.0913V7.5C8,9.0889,9.002,10,10.75,10h0.5C12.998,10,14,9.0889,14,7.5V7h0.5 C14.7761,7,15,6.7761,15,6.5C15,6.2238,14.7761,6,14.5,6z M6,7.5C6,8.1982,5.8013,9,4.25,9h-0.5C2.1987,9,2,8.1982,2,7.5V6.7524 C2,6.3374,2.3379,6,2.7529,6h2.4946C5.6626,6,6,6.3374,6,6.7524V7.5z M13,7.5C13,8.1982,12.8008,9,11.25,9h-0.5 C9.1992,9,9,8.1982,9,7.5V6.7524C9,6.3374,9.3369,6,9.752,6h2.4951C12.6621,6,13,6.3379,13,6.7529V7.5z' })], 'Optician15');

module.exports = optician15;
