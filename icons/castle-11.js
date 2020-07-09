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

var castle11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M8.67,0.81v1.48C8.6812,2.6709,8.3815,2.9888,8.0006,3C8.0004,3,8.0002,3,8,3H3.09c-0.381,0.0056-0.6944-0.2988-0.7-0.6799 C2.3899,2.3134,2.3899,2.3067,2.39,2.3V0.81c0-0.1905,0.1545-0.345,0.345-0.345S3.08,0.6195,3.08,0.81V1.5H4V1l0,0 c0-0.2761,0.2239-0.5,0.5-0.5S5,0.7239,5,1l0,0v0.5h1V1l0,0c0-0.2761,0.2239-0.5,0.5-0.5S7,0.7239,7,1l0,0v0.5h1V0.81 C7.9679,0.625,8.0919,0.449,8.2769,0.4169c0.185-0.0321,0.361,0.0919,0.3931,0.2769C8.6767,0.7323,8.6767,0.7716,8.67,0.81z M10.06,9.63c0,0.1933-0.1567,0.35-0.35,0.35h0H1.35C1.1567,9.9799,1.0001,9.8231,1.0002,9.6298 C1.0004,9.4366,1.1569,9.2801,1.35,9.28H1.7c0.3754,0.0112,0.6888-0.284,0.7-0.6594c0.0004-0.0135,0.0004-0.0271,0-0.0406 c0,0,0.7-3.2,0.7-3.89C3.0944,4.3145,3.3943,4.0056,3.7699,4C3.7766,3.9999,3.7833,3.9999,3.79,4h3.48 c0.3754-0.0112,0.6888,0.284,0.7,0.6594c0.0004,0.0135,0.0004,0.0271,0,0.0406c0,0.7,0.7,3.89,0.7,3.89 c-0.0112,0.3754,0.284,0.6888,0.6594,0.7c0.0135,0.0004,0.0271,0.0004,0.0406,0h0.34c0.1933,0,0.35,0.1567,0.35,0.35v0V9.63z M6.5,7.5c0-0.5523-0.4477-1-1-1s-1,0.4477-1,1v2h2V7.5z' })], 'Castle11');

module.exports = castle11;