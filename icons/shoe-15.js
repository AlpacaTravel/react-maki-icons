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

var shoe15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement('path', { key: 's-0', d: 'M9.5,7C9.086,6.7652,8.6109,6.4041,8.1848,6.0524l-2.1743-2.831C5.8204,2.9729,5.4644,2.927,5.2227,3.1172 C5.0977,3.214,5.0262,3.3536,5.0097,3.5H5V5H3.2087C3.0751,5,2.9469,4.9469,2.8524,4.8524C2.8524,4.8524,2.5,4,2,4 S1.4997,4,1.4997,4C1.2238,4,1,4.2237,1,4.4997V6.25v0.634V9h5.5c1.5,0,2,1,3.5,1s4,0,4,0V9.5C14,8,10.5469,7.5938,9.5,7z' }),
  React.createElement('path', { key: 's-1', d: 'M9.5,11c-0.6318,0-1.0469-0.207-1.5264-0.4473C7.4556,10.2939,6.8682,10,6,10H1.5004H1v1.4996 C1,11.7759,1.224,12,1.5004,12h3.9993C5.776,12,6,11.7759,6,11.4996V11c0.6318,0,1.0464,0.207,1.5264,0.4473 C8.0449,11.7061,8.6318,12,9.5,12h4c0.2764,0,0.5-0.2236,0.5-0.5V11H9.5z' })
)], 'Shoe15');

module.exports = shoe15;
