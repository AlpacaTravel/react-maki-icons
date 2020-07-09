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

var watch11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement('path', { key: 's-0', d: 'M9.0769,5.1538H8.9651C8.8412,3.9112,8.0789,2.8648,7,2.3497V1H4v1.3497C2.8208,2.9127,2,4.1062,2,5.5 s0.8208,2.5873,2,3.1503V10h3V8.6503c1.0789-0.5151,1.8413-1.5615,1.9651-2.8041h0.1118c0.1912,0,0.3462-0.155,0.3462-0.3461 S9.2681,5.1538,9.0769,5.1538z M5.5,8C4.1193,8,3,6.8807,3,5.5C3,4.1193,4.1193,3,5.5,3S8,4.1193,8,5.5C8,6.8807,6.8807,8,5.5,8z' }),
  React.createElement('path', { key: 's-1', d: 'M6.5,5H6V4c0-0.2762-0.2239-0.5-0.5-0.5S5,3.7238,5,4v1.5C5,5.7761,5.2239,6,5.5,6h1C6.7761,6,7,5.7761,7,5.5 C7,5.2238,6.7761,5,6.5,5z' })
)], 'Watch11');

module.exports = watch11;
