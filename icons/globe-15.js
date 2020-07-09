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

var globe15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement(
    'g',
    { key: 's-0' },
    React.createElement('path', { key: 's-0', d: 'M11.9807,9.4807l-0.7208-0.7208C10.3425,9.8168,9.006,10.5,7.5,10.5c-2.757,0-5-2.243-5-5 c0-1.506,0.6832-2.8425,1.7401-3.7599L3.5193,1.0193C2.2831,2.1183,1.5,3.7158,1.5,5.5c0,3.1449,2.4208,5.72,5.5,5.9747V13H6.5 C6.2239,13,6,13.2238,6,13.5C6,13.7761,6.2239,14,6.5,14h2C8.7761,14,9,13.7761,9,13.5C9,13.2238,8.7761,13,8.5,13H8v-1.5273 C9.5806,11.341,10.9858,10.5997,11.9807,9.4807z' })
  ),
  React.createElement(
    'g',
    { key: 's-1' },
    React.createElement('path', { key: 's-0', d: 'M7.5,9C9.433,9,11,7.433,11,5.5S9.433,2,7.5,2S4,3.567,4,5.5S5.567,9,7.5,9z M8.5,4l0.3638-0.5915 c0.3463,0.2263,0.6249,0.5394,0.8235,0.9042L9.5,5h-1V4z M6.6563,3.1563L7.5,4v1L8,6h1.5h0.4396 C9.7708,6.826,9.2026,7.5041,8.4381,7.8144L8,7H6.5L5.0504,5C5.2251,4.1396,5.8452,3.4486,6.6563,3.1563z' })
  )
)], 'Globe15');

module.exports = globe15;
