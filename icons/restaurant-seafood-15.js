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

var restaurantSeafood15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'restaurant-seafood-15' },
  React.createElement('path', { key: 's-0', d: 'M11.433,10.0889h2.49v.75H11.8525A4.81,4.81,0,0,1,13.4751,13.14l-.71.2422a4.01,4.01,0,0,0-1.74-2.1971,1.7775,1.7775,0,0,1-1.0352.4538L8.4374,12.9852H6.5188L4.9839,11.623a2.0222,2.0222,0,0,1-1.0929-.44,4.0093,4.0093,0,0,0-1.7426,2.1988l-.71-.2422a4.8146,4.8146,0,0,1,1.622-2.3007H.99v-.75H3.4839l.8633-.6764L3.3329,7.7567a2.2738,2.2738,0,0,1-.269.0293,2.0192,2.0192,0,0,1-2.0532-2.08c0-2.08,1.979-4.16,1.979-4.16L2.2531,5.9931l1.7255-.0012L4.9913,2.9852l0,2.9956a2.0936,2.0936,0,0,1-.6993,1.4121l.8536,1.3936L5.23,8.7208a3.8669,3.8669,0,0,1,4.4784,0l.0605.0474.869-1.4152a2.1177,2.1177,0,0,1-.6433-1.3722l0-2.9956.9836,3.0067,1.7547.0012-.7367-4.4466s1.982,2.08,1.982,4.16a2.0211,2.0211,0,0,1-2.0562,2.08,2.3125,2.3125,0,0,1-.3441-.0376L10.5676,9.3945l.8407.6593C11.4212,10.0638,11.4218,10.0782,11.433,10.0889Z' })
)], 'RestaurantSeafood15');

module.exports = restaurantSeafood15;
