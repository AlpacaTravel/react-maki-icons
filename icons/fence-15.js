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

var fence15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.5,10H13V7h.5a.5.5,0,0,0,0-1H13V4l-.286-.573a.249.249,0,0,0-.424-.006L12,4V6H11V4l-.286-.573a.249.249,0,0,0-.424-.006L10,4V6H9V4l-.286-.573a.249.249,0,0,0-.424-.006L8,4V6H7V4l-.286-.573a.249.249,0,0,0-.424-.006L6,4V6H5V4l-.286-.573a.249.249,0,0,0-.424-.006L4,4V6H3V4l-.286-.573a.249.249,0,0,0-.424-.006L2,4V6H1.5a.5.5,0,0,0,0,1H2v3H1.5a.5.5,0,0,0,0,1H2v1.5a.5.5,0,0,0,1,0V11H4v1.5a.5.5,0,0,0,1,0V11H6v1.5a.5.5,0,0,0,1,0V11H8v1.5a.5.5,0,0,0,1,0V11h1v1.5a.5.5,0,0,0,1,0V11h1v1.5a.5.5,0,0,0,1,0V11h.5a.5.5,0,0,0,0-1ZM3,10V7H4v3Zm2,0V7H6v3Zm2,0V7H8v3Zm2,0V7h1v3Zm2,0V7h1v3Z' })], 'Fence15');

module.exports = fence15;
